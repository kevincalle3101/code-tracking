import { Role } from "../entities/role.entity";

export interface RoleRepository {
    findById(id: number): Promise<Role | null>;
    findByName(name: string): Promise<Role | null>;
    findAll(): Promise<Role[]>;
    save(role: Role): Promise<Role>;
}

export const ROLE_REPOSITORY = 'ROLE_REPOSITORY';