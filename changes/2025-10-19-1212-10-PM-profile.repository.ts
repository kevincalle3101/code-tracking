import { Profile } from "../entities/profile.entity";

export interface ProfileRepository {
    findById(id: number): Promise<Profile | null>;
    findByName(name: string): Promise<Profile | null>;
    findAll(): Promise<Profile[]>;
    save(profile: Profile): Promise<Profile>;
}

export const PROFILE_REPOSITORY = 'PROFILE_REPOSITORY';