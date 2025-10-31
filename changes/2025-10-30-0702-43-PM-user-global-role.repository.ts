import { UserGlobalRole } from '../entities/user-global-role.entity';

export const UserGlobalRoleRepository = Symbol('UserGlobalRoleRepository');

export interface UserGlobalRoleRepository {
    findAll(): Promise<UserGlobalRole[]>;
    findByUserId(userId: number): Promise<UserGlobalRole[]>;
    find(userId: number, globalRoleId: number): Promise<UserGlobalRole | null>;
    save(userGlobalRole: UserGlobalRole): Promise<UserGlobalRole>;
    delete(userId: number, globalRoleId: number): Promise<void>;
}