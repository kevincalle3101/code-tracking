import { GlobalRolePermission } from '../entities/global-role-permission.entity';

export interface GlobalRolePermissionRepository {
    save(entities: GlobalRolePermission[]): Promise<void>;
    findAll(): Promise<GlobalRolePermission[]>;
    deleteByGlobalRoleId(globalRoleId: number): Promise<void>;
}

export const GLOBAL_ROLE_PERMISSION_REPOSITORY = 'GLOBAL_ROLE_PERMISSION_REPOSITORY';