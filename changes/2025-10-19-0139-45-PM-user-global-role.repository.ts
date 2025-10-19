import { UserGlobalRole } from '../entities/user-global-role.entity';

export interface UserGlobalRoleRepository {
    findAll(): Promise<UserGlobalRole[]>;
    find(userId: number, globalRoleId: number): Promise<UserGlobalRole | null>;
    save(userGlobalRole: UserGlobalRole): Promise<UserGlobalRole>;
    delete(userId: number, globalRoleId: number): Promise<void>;
}

export const USER_GLOBAL_ROLE_REPOSITORY = 'USER_GLOBAL_ROLE_REPOSITORY';