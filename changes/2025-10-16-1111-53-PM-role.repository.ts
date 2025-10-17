import { Role } from '../entities/role.entity';

export interface RoleRepository {
    findAll(): Promise<Role[]>;
    findById(id: number): Promise<Role | null>;
    findByName(name: string): Promise<Role | null>;
    findByDescription(description: string): Promise<Role | null>;
    save(role: Role): Promise<Role>;
    deleteById(id: number): Promise<void>;
}

export const ROLE_REPOSITORY = 'ROLE_REPOSITORY';