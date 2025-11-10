import { MediaProcess } from "../entities/media-process.entity";

export interface MediaProcessingPort {
  createTranscodeAndThumbnailJob(sourceUri: string, clipId: string): Promise<MediaProcess>;
  createSimpleTranscodeJob(sourceUri: string, clipId: string): Promise<MediaProcess>;
}

export const MediaProcessingPort = Symbol('MediaProcessingPort');