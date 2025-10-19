import { EntitySchema } from 'typeorm';
import { Permission } from 'src/domain/entities/permission.entity';

export const PermissionSchema = new EntitySchema<Permission>({
    name: 'Permission',
    target: Permission,
    tableName: 'permission',
    columns: {
        id: { type: 'int', primary: true, generated: 'increment' },
        name: { type: 'varchar', length: 255, nullable: false },
        description: { type: 'varchar', length: 255, nullable: true }
    }
});