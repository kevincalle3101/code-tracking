import { MediaClipTag } from "../entities/media-clip-tag.entity";

export interface MediaClipTagRepository {
    save(entities: MediaClipTag[]): Promise<void>
    findAll(): Promise<MediaClipTag[]>
    deleteByClipId(clipId: number): Promise<void>
}
export const MEDIA_CLIP_TAG_REPOSITORY = 'MEDIA_CLIP_TAG_REPOSITORY'