import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretsManagerAdapter } from './aws/secrets-manager.adapter';
import { DbConfig } from '../config/interfaces/db-config.interface';
import { AppConfig } from '../config/interfaces/app-config.interface';
import { StatusSchema } from './database/schema/status.schema';
import { TagSchema } from './database/schema/tag.schema';
import { AuditSchema } from './database/schema/audit.schema';
import { ClipTagSchema } from './database/schema/clip-tag.schema';
import { ClipSchema } from './database/schema/clip.schema';
import { TagRepositoryImpl } from './database/repositories/tag.repository.impl';
import { TagRepository } from 'src/domain/repositories/tag.repository';
import { AuditRepository } from 'src/domain/repositories/audit.repository';
import { AuditRepositoryImpl } from './database/repositories/audit.repository.impl';
import { ClipRepository } from 'src/domain/repositories/clip.repository';
import { ClipRepositoryImpl } from './database/repositories/clip.repository.impl'
import { AwsModule } from './aws/aws.module';
import { ClipTagRepositoryImpl } from './database/repositories/clip-tag.repository.impl';
import { ClipTagRepository } from 'src/domain/repositories/clip-tag.repository';

@Module({
  imports: [
    ConfigModule,
    AwsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, AwsModule],
      inject: [ConfigService, SecretsManagerAdapter],
      useFactory: async (
        configService: ConfigService,
        secretsManagerAdapter: SecretsManagerAdapter,
      ) => {
        const dbConfig = configService.get<DbConfig>('db');
        const appConfig = configService.get<AppConfig>('app');
        if (!appConfig || !dbConfig) throw new Error('Configuración de App o Base de Datos no encontrada');

        console.log('--- DATABASE CONNECTION ---')
        console.log(dbConfig)

        interface DbCredentials { username: string; password: string; }
        const secretName = dbConfig.secretName;

        let username = dbConfig.user;
        let password: string = dbConfig.password || '';
        let ssl: any = false

        if (secretName) {
          try {
            console.log(`[DB Connect] Obteniendo credenciales de Secrets Manager para ${dbConfig.database}`);
            const secret = await secretsManagerAdapter.getSecretValue<DbCredentials>(secretName);
... (truncated for brevity)