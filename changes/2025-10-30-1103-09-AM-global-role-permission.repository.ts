import { GlobalRolePermission } from '../entities/global-role-permission.entity';

export interface GlobalRolePermissionRepository {
    findAll(): Promise<GlobalRolePermission[]>;
    findByGlobalRoleIds(globalRoleIds: number[]): Promise<GlobalRolePermission[]>;
    find(globalRoleId: number, permissionId: number): Promise<GlobalRolePermission | null>;
    save(globalRolePermission: GlobalRolePermission): Promise<GlobalRolePermission>;
    delete(globalRoleId: number, permissionId: number): Promise<void>;
}

export const GLOBAL_ROLE_PERMISSION_REPOSITORY = 'GLOBAL_ROLE_PERMISSION_REPOSITORY';