import { ProfileGlobalRole } from '../entities/profile-global-role.entity';

export const ProfileGlobalRoleRepository = Symbol('ProfileGlobalRoleRepository');

export interface ProfileGlobalRoleRepository {
    findAll(): Promise<ProfileGlobalRole[]>;
    findByProfileId(profileId: number): Promise<ProfileGlobalRole[]>;
    find(profileId: number, globalRoleId: number): Promise<ProfileGlobalRole | null>;
    save(profileGlobalRole: ProfileGlobalRole): Promise<ProfileGlobalRole>;
    delete(profileId: number, globalRoleId: number): Promise<void>;
}