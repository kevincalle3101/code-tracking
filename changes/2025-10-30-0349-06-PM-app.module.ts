import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { validationSchema } from './infrastructure/config/config.schema';
import { loadYamlConfig } from './infrastructure/config/config.loader';
import { LoggerModule } from 'nestjs-pino';
import { AdaptersModule } from './infrastructure/adapters/adapters.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: process.env.NODE_ENV === 'local'
          ? { target: 'pino-pretty' }
          : undefined,
        level: process.env.NODE_ENV === 'local' ? 'debug' : 'info',
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadYamlConfig],
      validationSchema,
    }),
    ApplicationModule,
    AdaptersModule,
    InfrastructureModule,
  ],
})
export class AppModule { }