import { EntitySchema } from 'typeorm';
import { GlobalRolePermission } from 'src/domain/entities/global-role-permission.entity';

export const GlobalRolePermissionSchema = new EntitySchema<GlobalRolePermission>({
    name: 'GlobalRolePermission',
    target: GlobalRolePermission,
    tableName: 'global_role_permission',
    columns: {
        globalRoleId: { type: 'int', primary: true },
        permissionId: { type: 'int', primary: true },
        createdAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
        updatedAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }
    }
});