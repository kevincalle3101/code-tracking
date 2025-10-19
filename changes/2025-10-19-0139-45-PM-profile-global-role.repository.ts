import { ProfileGlobalRole } from '../entities/profile-global-role.entity';

export interface ProfileGlobalRoleRepository {
    findAll(): Promise<ProfileGlobalRole[]>;
    find(profileId: number, globalRoleId: number): Promise<ProfileGlobalRole | null>;
    save(profileGlobalRole: ProfileGlobalRole): Promise<ProfileGlobalRole>;
    delete(profileId: number, globalRoleId: number): Promise<void>;
}

export const PROFILE_GLOBAL_ROLE_REPOSITORY = 'PROFILE_GLOBAL_ROLE_REPOSITORY';