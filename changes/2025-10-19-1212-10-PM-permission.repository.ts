import { Permission } from "../entities/permission.entity";

export interface PermissionRepository {
    findById(id: number): Promise<Permission | null>;
    findByName(name: string): Promise<Permission | null>;
    findAll(): Promise<Permission[]>;
    save(permission: Permission): Promise<Permission>;
}

export const PERMISSION_REPOSITORY = 'PERMISSION_REPOSITORY';