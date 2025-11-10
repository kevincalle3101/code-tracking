import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProcessRawFiles } from './process-raw-files.consumer';
import { AwsConfig } from '../config/interfaces/aws-config.interface';
import { QueuesConfig } from '../config/interfaces/consumer-config.interface';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  imports: [
    ApplicationModule,
    SqsModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const awsConfig = configService.get<AwsConfig>('aws');
        const queuesConfig = configService.get<QueuesConfig[]>('queues');

        if (!awsConfig || !queuesConfig) {
          throw new Error('Configuración de AWS o de las colas no encontrada');
        }

        const consumers = queuesConfig.map(queue => ({
          name: queue.name,
          queueUrl: queue.url,
          region: awsConfig.region,
        }));

        return {
          consumers,
          producers: [],
        };
      },
    }),
  ],
    providers: [
    ProcessRawFiles,
  ],
  exports: [SqsModule],
})
export class ConsumerModule {}