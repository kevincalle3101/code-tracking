import { RolePermission } from '../entities/role-permission.entity';

export interface RolePermissionRepository {
    save(entities : RolePermission[]): Promise<void>
    findAll(): Promise<RolePermission[]>
    deleteByRoleId(roleId: number): Promise<void>
}

export const ROLE_PERMISSION_REPOSITORY = 'ROLE_PERMISSION_REPOSITORY';