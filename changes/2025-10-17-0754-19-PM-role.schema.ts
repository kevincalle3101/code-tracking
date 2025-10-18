import { EntitySchema } from 'typeorm';
import { Role } from 'src/domain/entities/role.entity';

export const RoleSchema = new EntitySchema<Role>({
    name: 'Role',
    target: Role,
    columns: {
        id: { type: 'int', primary: true, generated: true },
        name: { type: 'varchar' },
        description: { type: 'varchar' },
        createdAt: { type: 'timestamp', default: () => 'NOW()' },
        updatedAt: { type: 'timestamp', default: () => 'NOW()' }
    }
});