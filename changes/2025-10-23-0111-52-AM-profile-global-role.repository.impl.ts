import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileGlobalRole } from 'src/domain/entities/profile-global-role.entity';
import { ProfileGlobalRoleRepository } from 'src/domain/repositories/profile-global-role.repository';
import { ProfileGlobalRoleSchema } from '../schema/profile-global-role.schema';

@Injectable()
export class ProfileGlobalRoleRepositoryImpl implements ProfileGlobalRoleRepository {
    constructor(
        @InjectRepository(ProfileGlobalRoleSchema)
        private readonly repository: Repository<ProfileGlobalRole>
    ) { }

    async findAll(): Promise<ProfileGlobalRole[]> {
        return await this.repository.find();
    }

    async findByProfileId(profileId: number): Promise<ProfileGlobalRole[]> {
        return await this.repository.find({ where: { profileId } });
    }

    async find(profileId: number, globalRoleId: number): Promise<ProfileGlobalRole | null> {
        return await this.repository.findOne({ where: { profileId, globalRoleId } });
    }

    async save(profileGlobalRole: ProfileGlobalRole): Promise<ProfileGlobalRole> {
        return await this.repository.save(profileGlobalRole);
    }

    async delete(profileId: number, globalRoleId: number): Promise<void> {
        await this.repository.delete({ profileId, globalRoleId });
    }
}