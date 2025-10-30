import { Permission } from '../entities/permission.entity';

export interface PermissionRepository {
    findAll(): Promise<Permission[]>;
    findById(id: number): Promise<Permission | null>;
    findByIds(ids: number[]): Promise<Permission[]>;
    findByName(name: string): Promise<Permission | null>;
    save(permission: Permission): Promise<Permission>;
    deleteById(id: number): Promise<void>;
}

export const PERMISSION_REPOSITORY = 'PERMISSION_REPOSITORY';