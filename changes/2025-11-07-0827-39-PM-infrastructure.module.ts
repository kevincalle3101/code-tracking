import { Global, Module } from '@nestjs/common';
import { ClipController } from './controllers/clip.controller';
import { S3Adapter } from './adapters/aws/s3.adapter';
import { MediaConvertAdapter } from './adapters/aws/media-convert.adapter';
import { MediaClipAdapter } from './adapters/external/media-clip.adapter';
import { MediaClipPort } from 'src/domain/ports/media-clip.port';
import { VideoMetadataService } from './adapters/util/video-metadata.service';
import { ConsumerModule } from './consumers/consumer.module';
import { ApplicationModule } from 'src/application/application.module';
import { StoragePort } from 'src/domain/ports/storage.port';
import { MediaProcessingPort } from 'src/domain/ports/media-processing.port';
import { VideoMetadataPort } from 'src/domain/ports/video-metadata.port';
import { HttpModule } from '@nestjs/axios';
import { RedisInteractionBufferAdapter } from './adapters/cache/redis-interaction-buffer.adapter';
import { InteractionBufferPort } from 'src/domain/ports/interaction-buffer.port';
import { InteractionBufferSettingsToken } from 'src/domain/value-objects/interaction-buffer-settings.value-object';
import type { InteractionBufferSettings } from 'src/domain/value-objects/interaction-buffer-settings.value-object';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    HttpModule,
    ConsumerModule,
    ApplicationModule,
  ],
  controllers: [ClipController],
  providers: [
    {
      provide: StoragePort,
      useClass: S3Adapter,
    },
    {
      provide: MediaProcessingPort,
      useClass: MediaConvertAdapter,
    },
    {
      provide: VideoMetadataPort,
      useClass: VideoMetadataService,
    },
    {
      provide: MediaClipPort,
      useClass: MediaClipAdapter,
    },
    {
      provide: InteractionBufferSettingsToken,
      inject: [ConfigService],
      useFactory: (configService: ConfigService): InteractionBufferSettings => {
        const interactionsConfig = configService.get('interactions') as Record<string, any> | undefined;
        const bufferConfig = interactionsConfig?.buffer ?? {};
... (truncated for brevity)