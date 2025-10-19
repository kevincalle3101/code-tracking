import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleRepository } from 'src/domain/repositories/role.repository';
import { Role } from 'src/domain/entities/role.entity';
import { RoleSchema } from '../schema/role.schema';

@Injectable()
export class RoleRepositoryImpl implements RoleRepository {
    constructor(
        @InjectRepository(RoleSchema)
        private readonly typeormRepository: Repository<Role>
    ) { }

    async findAll(): Promise<Role[]> {
        return this.typeormRepository.find({ relations: ['permissions'] });
    }

    async findById(id: number): Promise<Role | null> {
        return this.typeormRepository.findOne({
            where: { id },
            relations: ['permissions']
        });
    }

    async findByName(name: string): Promise<Role | null> {
        return this.typeormRepository.findOne({
            where: { name },
            relations: ['permissions']
        });
    }

    async save(role: Role): Promise<Role> {
        return this.typeormRepository.save(role);
    }
}