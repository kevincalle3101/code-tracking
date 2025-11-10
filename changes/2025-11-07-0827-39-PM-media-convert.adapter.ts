import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MediaConvertClient, CreateJobCommand, MediaConvertClientConfig } from '@aws-sdk/client-mediaconvert';
import { AwsConfig, S3Config } from 'src/infrastructure/config/interfaces/aws-config.interface';
import { MediaProcessingPort } from 'src/domain/ports/media-processing.port';
import { MediaProcess } from 'src/domain/entities/media-process.entity';

export interface TranscodeJobResult {
  jobId: string;
  outputPaths: {
    hlsManifest: string;
    thumbnail: string;
  };
}

@Injectable()
export class MediaConvertAdapter implements MediaProcessingPort {
  private readonly logger = new Logger(MediaConvertAdapter.name);
  private readonly mediaConvertClient: MediaConvertClient;
  private readonly mediaConvertRole: string;
  private readonly outputBucket: string;

  constructor(private readonly configService: ConfigService) {
    const awsConfig = this.configService.get<AwsConfig>('aws');
    const s3Config = this.configService.get<S3Config>('s3');
    if (!awsConfig || !s3Config) throw new Error('AWS configuration empty');

    const config: MediaConvertClientConfig = new MediaConvertClient({
      region: awsConfig.region,
      endpoint: `https://mediaconvert.${awsConfig.region}.amazonaws.com`
    });

    if (awsConfig.endpoint) {
      config.endpoint = awsConfig.endpoint;
      config.credentials = {
        accessKeyId: 'test',
        secretAccessKey: 'test',
      };
    }

    this.mediaConvertRole = awsConfig.mediaConvertRoleArn;
    this.outputBucket = s3Config.buckets.assets;
    this.mediaConvertClient = new MediaConvertClient(config);
  }

  private generateDestinationPath(clipId: string, type: 'video' | 'thumbnail'): string {
    return `s3://${this.outputBucket}/${clipId}/${type}`;
  }

  private generateOutputPath(clipId: string, type: 'video' | 'thumbnail'): string {
... (truncated for brevity)