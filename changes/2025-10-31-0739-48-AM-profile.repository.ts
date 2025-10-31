import { Profile } from '../entities/profile.entity';

export const ProfileRepository = Symbol('ProfileRepository');

export interface ProfileRepository {
    findAll(): Promise<Profile[]>;
    findById(id: number): Promise<Profile | null>;
    findByName(name: string): Promise<Profile | null>;
    save(profile: Profile): Promise<Profile>;
    deleteById(id: number): Promise<void>;
}