import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { 
  SNSClient, 
  CreatePlatformEndpointCommand, 
  PublishCommand 
} from '@aws-sdk/client-sns';
import { AwsConfig } from 'src/infrastructure/config/interfaces/aws-config.interface';

@Injectable()
export class SnsAdapter {
  private readonly logger = new Logger(SnsAdapter.name);
  private readonly snsClient: SNSClient;
  private readonly platformApplicationArn: string;

  constructor(private readonly configService: ConfigService) {
    const awsConfiguration = this.configService.get<AwsConfig>('aws');
    if (!awsConfiguration) throw new Error('AWS configuration empty');
    this.snsClient = new SNSClient({
      region: configService.get<string>('aws.region'),
    });
    this.platformApplicationArn = awsConfiguration.snsPlatformApplicationArn;
  }

  async sendPushNotification(title: string, message: string, deviceToken: string): Promise<void> {
    this.logger.log(`Intentando enviar notificación a token: ${deviceToken}`);
    
    try {
      const endpointCommand = new CreatePlatformEndpointCommand({
        PlatformApplicationArn: this.platformApplicationArn,
        Token: deviceToken,
      });
      const endpointResponse = await this.snsClient.send(endpointCommand);
      const endpointArn = endpointResponse.EndpointArn;

      if (!endpointArn) {
        throw new Error('No se pudo crear el endpoint de SNS para el dispositivo.');
      }
      
      const payload = {
        GCM: JSON.stringify({
          notification: {
            title,
            body: message,
            sound: 'default',
          },
        }),
        APNS: JSON.stringify({
          aps: {
            alert: {
... (truncated for brevity)