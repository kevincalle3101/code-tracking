import { ProfileRole } from '../entities/profile-role.entity';

export interface ProfileRoleRepository {
    findAll(): Promise<ProfileRole[]>;
    save(entities : ProfileRole[]): Promise<void>;
    deleteByProfileId(profileId: number): Promise<void>;
}

export const PROFILE_ROLE_REPOSITORY = 'PROFILE_ROLE_REPOSITORY';