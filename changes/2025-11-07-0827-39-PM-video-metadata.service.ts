import { Inject, Injectable, Logger } from '@nestjs/common';
import ffmpeg from 'fluent-ffmpeg';
import { GenerateThumbnailOptions, VideoMetadataPort } from 'src/domain/ports/video-metadata.port';
import { StoragePort } from 'src/domain/ports/storage.port';
import { createWriteStream } from 'fs';
import { mkdtemp, readFile, rm } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import jpeg from 'jpeg-js';

@Injectable()
export class VideoMetadataService implements VideoMetadataPort {
  private readonly logger = new Logger(VideoMetadataService.name);

  constructor(
    @Inject(StoragePort)
    private readonly storagePort: StoragePort
  ) { }

  public getVideoDuration(bucket: string, key: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
      try {
        const videoStream = await this.storagePort.getObjectStream(bucket, key);

        ffmpeg(videoStream)
          .ffprobe((err, data) => {
            if (err) {
              return reject(err);
            }
            const duration = data.format.duration;
            if (duration !== undefined) {
              resolve(Math.round(duration));
            } else {
              reject(new Error('No se pudo determinar la duración del video.'));
            }
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  public async generateThumbnail(options: GenerateThumbnailOptions): Promise<string> {
    const {
      clipId,
      sourceBucket,
      sourceKey,
      targetKey,
      durationSeconds,
      width = 1280,
... (truncated for brevity)