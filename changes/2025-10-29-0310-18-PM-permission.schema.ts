import { EntitySchema } from 'typeorm';
import { Permission } from 'src/domain/entities/permission.entity';

export const PermissionSchema = new EntitySchema<Permission>({
    name: 'Permission',
    target: Permission,
    tableName: 'permission',
    columns: {
        id: { name: 'id', type: 'int', primary: true, generated: true },
        name: { name: 'name', type: 'varchar' },
        description: { name: 'description', type: 'varchar', nullable: true },
        createdAt: { name: 'created_at', type: 'timestamp', default: () => 'NOW()', nullable: true },
        updatedAt: { name: 'updated_at', type: 'timestamp', default: () => 'NOW()', nullable: true }
    },
    relations: {
        globalRolePermissions: {
            type: 'one-to-many',
            target: 'GlobalRolePermission',
            inverseSide: 'permission',
        },
        companyRolePermissions: {
            type: 'one-to-many',
            target: 'CompanyRolePermission',
            inverseSide: 'permission',
        }
    }
});