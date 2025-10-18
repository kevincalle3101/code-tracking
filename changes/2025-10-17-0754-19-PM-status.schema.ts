import { EntitySchema } from 'typeorm';
import { Status } from 'src/domain/entities/status.entity';

export const StatusSchema = new EntitySchema<Status>({
    name: 'Status',
    target: Status,
    columns: {
        id: { type: 'int', primary: true, generated: true },
        description: { type: 'varchar' }
    }
});