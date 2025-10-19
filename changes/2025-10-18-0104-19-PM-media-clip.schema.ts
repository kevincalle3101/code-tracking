import { EntitySchema } from 'typeorm';
import { MediaClip } from 'src/domain/entities/media-clip.entity';

export const MediaClipSchema = new EntitySchema<MediaClip>({
    name: 'MediaClip',
    target: MediaClip,
    tableName: 'mediaClip',
    columns: {
        id: { type: 'int', primary: true, generated: true },
        code: { type: 'varchar', length: 10 },
        userId: { type: 'varchar', length: 150 },
        statusId: { type: 'int' },
        ubigeo: { type: 'varchar', length: 6 },
        videoUrlLq: { type: 'text' },
        videoUrlHq: { type: 'text' },
        postUrl: { type: 'text', nullable: true },
        thumbnailUrl: { type: 'text', nullable: true },
        title: { type: 'varchar', length: 150 },
        description: { type: 'text', nullable: true },
        duration: { type: 'int', nullable: true },
        views: { type: 'bigint', default: 0 },
        likes: { type: 'bigint', default: 0 },
        createDate: { type: 'timestamp', default: () => 'NOW()' },
        updateDate: { type: 'timestamp', default: () => 'NOW()' }
    }
})