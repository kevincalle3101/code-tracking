import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { AwsConfig } from 'src/infrastructure/config/interfaces/aws-config.interface';

@Injectable()
export class SecretsManagerAdapter {
  private readonly logger = new Logger(SecretsManagerAdapter.name);
  private readonly client: SecretsManagerClient;
  private readonly region: string;

  constructor(private readonly configService: ConfigService) {
    const awsConfig = this.configService.get<AwsConfig>('aws');
    if (!awsConfig || !awsConfig.region) {
      throw new Error('Región de AWS no configurada.');
    }
    this.region = awsConfig.region;
    this.client = new SecretsManagerClient({ region: this.region });
  }

  async getSecretValue<T>(secretName: string): Promise<T> {
    this.logger.debug(`Obteniendo secreto: ${secretName}`);
    const command = new GetSecretValueCommand({ SecretId: secretName });

    try {
      const data = await this.client.send(command);
      let secretValue: string;

      if (data.SecretString) {
        secretValue = data.SecretString;
      } else if (data.SecretBinary) {
        secretValue = Buffer.from(data.SecretBinary).toString('utf8');
      } else {
        throw new Error(`El secreto ${secretName} no tiene contenido.`);
      }

      return JSON.parse(secretValue) as T;
    } catch (error) {
      this.logger.error(`Error al obtener el secreto ${secretName}`, error.stack);
      throw new Error(`No se pudo obtener el secreto: ${secretName}`);
    }
  }
}