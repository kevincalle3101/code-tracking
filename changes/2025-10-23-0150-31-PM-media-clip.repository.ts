import { MediaClip } from "../entities/media-clip.entity";

export interface MediaClipRepository {
    findAll(): Promise<MediaClip[]>
    save(mediaClip: MediaClip): Promise<MediaClip>
    findByCode(code: string): Promise<MediaClip | null>
    deleteById(id: number): Promise<void>
    findByCode(code: string): Promise<MediaClip | null>
}
export const MEDIA_CLIP_REPOSITORY = 'MEDIA_CLIP_REPOSITORY'