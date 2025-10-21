import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from 'src/domain/entities/profile.entity';
import { ProfileRepository } from 'src/domain/repositories/profile.repository';
import { ProfileSchema } from '../schema/profile.schema';

@Injectable()
export class ProfileRepositoryImpl implements ProfileRepository {
    constructor(
        @InjectRepository(ProfileSchema)
        private readonly repository: Repository<Profile>
    ) { }

    async findAll(): Promise<Profile[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Profile | null> {
        return await this.repository.findOne({ where: { id } });
    }

    async findByName(name: string): Promise<Profile | null> {
        return await this.repository.findOne({ where: { name } });
    }

    async save(profile: Profile): Promise<Profile> {
        return await this.repository.save(profile);
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}