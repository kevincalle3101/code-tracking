import { EntitySchema } from 'typeorm';
import { Status } from 'src/domain/entities/status.entity';

export const StatusSchema = new EntitySchema<Status>({
    name: 'Status',
    target: Status,
    tableName: 'status',
    columns: {
        id: { name: 'id', type: 'int', primary: true, generated: true },
        description: { name: 'description', type: 'varchar' }
    },
    relations: {
        users: {
            type: 'one-to-many',
            target: 'User',
            inverseSide: 'status',
        }
    }
});