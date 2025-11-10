import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { validationSchema } from './infrastructure/config/config.schema';
import { configLoader } from './infrastructure/config/config.loader'; 
import { LoggerModule } from 'nestjs-pino';
import { ConsumerModule } from './infrastructure/consumers/consumer.module';
import { DomainModule } from './domain/domain.module';

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
      load: [configLoader], 
      validationSchema,
    }),
    DomainModule,
    ApplicationModule,
    InfrastructureModule,
    ConsumerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}