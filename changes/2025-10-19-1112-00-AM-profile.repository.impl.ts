import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileRepository } from 'src/domain/repositories/profile.repository';
import { Profile } from 'src/domain/entities/profile.entity';
import { ProfileSchema } from '../schema/profile.schema';

@Injectable()
export class ProfileRepositoryImpl implements ProfileRepository {
    constructor(
        @InjectRepository(ProfileSchema)
        private readonly typeormRepository: Repository<Profile>
    ) { }

    async findAll(): Promise<Profile[]> {
        return this.typeormRepository.find({ relations: ['roles'] });
    }

    async findById(id: number): Promise<Profile | null> {
        return this.typeormRepository.findOne({
            where: { id },
            relations: ['roles']
        });
    }

    async findByName(name: string): Promise<Profile | null> {
        return this.typeormRepository.findOne({
            where: { name },
            relations: ['roles']
        });
    }

    async save(profile: Profile): Promise<Profile> {
        return this.typeormRepository.save(profile);
    }
}