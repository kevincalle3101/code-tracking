import { EntitySchema } from 'typeorm';
import { Permission } from 'src/domain/entities/permission.entity';

export const PermissionSchema = new EntitySchema<Permission>({
    name: 'Permission',
    target: Permission,
    columns: {
        id: { type: 'int', primary: true, generated: true },
        name: { type: 'varchar' },
        description: { type: 'varchar' },
        createdAt: { type: 'timestamp', default: () => 'NOW()' },
        updatedAt: { type: 'timestamp', default: () => 'NOW()' }
    }
});