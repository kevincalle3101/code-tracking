import { EntitySchema } from 'typeorm';
import { MediaClipTag } from 'src/domain/entities/media-clip-tag.entity';

export const MediaClipTagSchema = new EntitySchema<MediaClipTag>({
    name: 'MediaClipTag',
    target: MediaClipTag,
    columns: {
        clipId: { type: 'int', primary: true },
        tagId: { type: 'int', primary: true }
    }
})