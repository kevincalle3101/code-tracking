export interface VideoMetadataPort {
  getVideoDuration(bucket: string, key: string): Promise<number>;
  generateThumbnail(options: GenerateThumbnailOptions): Promise<string>;
}

export const VideoMetadataPort = Symbol('VideoMetadataPort');

export interface GenerateThumbnailOptions {
  clipId: string;
  sourceBucket: string;
  sourceKey: string;
  targetKey?: string;
  durationSeconds?: number;
  width?: number;
}