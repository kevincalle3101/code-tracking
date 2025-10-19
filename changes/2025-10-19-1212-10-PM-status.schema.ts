import { EntitySchema } from 'typeorm';
import { Status } from 'src/domain/entities/status.entity';

export const StatusSchema = new EntitySchema<Status>({
    name: 'Status',
    target: Status,
    tableName: 'status',
    columns: {
        id: { type: 'int', primary: true, generated: 'increment' },
        description: { type: 'varchar', length: 255, nullable: false }
    }
})