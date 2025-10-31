import { GlobalRolePermission } from '../entities/global-role-permission.entity';

export const GlobalRolePermissionRepository = Symbol('GlobalRolePermissionRepository');

export interface GlobalRolePermissionRepository {
    findAll(): Promise<GlobalRolePermission[]>;
    findByGlobalRoleIds(globalRoleIds: number[]): Promise<GlobalRolePermission[]>;
    find(globalRoleId: number, permissionId: number): Promise<GlobalRolePermission | null>;
    save(globalRolePermission: GlobalRolePermission): Promise<GlobalRolePermission>;
    delete(globalRoleId: number, permissionId: number): Promise<void>;
}