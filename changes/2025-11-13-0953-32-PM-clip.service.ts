import { Inject, Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { S3EventRecord } from 'aws-lambda';
import { StartUploadIn, StartUploadOut } from '../dtos/start-upload.dto';
import * as mime from 'mime-types';
import { extname } from 'path';
import { buildError, buildSuccess, ResponseDto } from '../dtos/response.dto';
import { MediaClipDto, PartialMediaClipDto } from '../dtos/media-clip.dto';
import { PaginatedResponseDto } from '../dtos/paginated-response.dto';
import { ListClipsQueryDto } from '../dtos/list-clips.dto';
import { MediaClipPort } from 'src/domain/ports/media-clip.port';
import { StoragePort } from 'src/domain/ports/storage.port';
import { MediaProcessingPort } from 'src/domain/ports/media-processing.port';
import { VideoMetadataPort } from 'src/domain/ports/video-metadata.port';
import { ClipMapper } from '../mappers/clip.mapper';
import { OrderStatus } from 'src/infrastructure/adapters/external/media-clip.adapter';
import { InteractionBufferPort } from 'src/domain/ports/interaction-buffer.port';
import { ClipInteractionAggregate, ClipInteractionType, ClipInteractionUpdate } from 'src/domain/value-objects/clip-interaction.value-object';
import { InteractionBufferSettingsToken } from 'src/domain/value-objects/interaction-buffer-settings.value-object';
import type { InteractionBufferSettings } from 'src/domain/value-objects/interaction-buffer-settings.value-object';
import { ClipInteractionProcessingResultDto, RegisterClipInteractionsDto } from '../dtos/register-interactions.dto';

const SUPPORTED_INTERACTION_TYPES = new Set(Object.values(ClipInteractionType));

@Injectable()
export class ClipService implements OnModuleDestroy {
  private readonly logger = new Logger(ClipService.name);
  private readonly flushTimer: NodeJS.Timeout;

  constructor(
    @Inject(MediaProcessingPort)
    private readonly mediaProcessingPort: MediaProcessingPort,
    @Inject(StoragePort)
    private readonly mediaStoragePort: StoragePort,
    @Inject(VideoMetadataPort)
    private readonly videoMetadataPort: VideoMetadataPort,
    @Inject(MediaClipPort)
    private readonly mediaClipPort: MediaClipPort,
    @Inject(InteractionBufferPort)
    private readonly interactionBuffer: InteractionBufferPort,
    @Inject(InteractionBufferSettingsToken)
    private readonly bufferSettings: InteractionBufferSettings,
    private readonly clipMapper: ClipMapper,
  ) {
    this.flushTimer = setInterval(() => {
      this.flushExpiredInteractions()
        .catch((error) => this.logger.error(`Error flushing buffered interactions: ${error.message}`, error.stack));
    }, this.bufferSettings.sweepIntervalMs);
    if (typeof this.flushTimer.unref === 'function') {
      this.flushTimer.unref();
... (truncated for brevity)