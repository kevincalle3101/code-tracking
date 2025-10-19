import { EntitySchema } from 'typeorm';
import { Tag } from 'src/domain/entities/tag.entity';

export const TagSchema = new EntitySchema<Tag>({
    name: 'Tag',
    target: Tag,
    columns: {
        id: { type: 'int', primary: true, generated: true },
        description: { type: 'varchar' }
    }
})