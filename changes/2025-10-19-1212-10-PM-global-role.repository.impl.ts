import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GlobalRoleRepository } from 'src/domain/repositories/global-role.repository';
import { GlobalRole } from 'src/domain/entities/global-role.entity';
import { GlobalRoleSchema } from '../schema/global-role.schema';

@Injectable()
export class GlobalRoleRepositoryImpl implements GlobalRoleRepository {
    constructor(
        @InjectRepository(GlobalRoleSchema)
        private readonly typeormRepository: Repository<GlobalRole>
    ) { }

    async findAll(): Promise<GlobalRole[]> {
        return this.typeormRepository.find({ relations: ['permissions'] });
    }

    async findById(id: number): Promise<GlobalRole | null> {
        return this.typeormRepository.findOne({
            where: { id },
            relations: ['permissions']
        });
    }

    async findByName(name: string): Promise<GlobalRole | null> {
        return this.typeormRepository.findOne({
            where: { name },
            relations: ['permissions']
        });
    }

    async save(globalRole: GlobalRole): Promise<GlobalRole> {
        return this.typeormRepository.save(globalRole);
    }
}