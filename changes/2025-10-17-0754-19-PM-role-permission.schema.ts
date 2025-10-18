import { EntitySchema } from 'typeorm';
import { RolePermission } from 'src/domain/entities/role-permission.entity';

export const RolePermissionSchema = new EntitySchema<RolePermission>({
    name: 'RolePermission',
    target: RolePermission,
    columns: {
        roleId: { type: 'int', primary: true },
        permissionId: { type: 'int', primary: true }
    }
});