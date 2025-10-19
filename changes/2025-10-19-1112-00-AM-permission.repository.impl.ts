import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionRepository } from 'src/domain/repositories/permission.repository';
import { Permission } from 'src/domain/entities/permission.entity';
import { PermissionSchema } from '../schema/permission.schema';

@Injectable()
export class PermissionRepositoryImpl implements PermissionRepository {
    constructor(
        @InjectRepository(PermissionSchema)
        private readonly typeormRepository: Repository<Permission>
    ) { }

    async findAll(): Promise<Permission[]> {
        return this.typeormRepository.find({});
    }

    async findById(id: number): Promise<Permission | null> {
        return this.typeormRepository.findOneBy({ id });
    }

    async findByName(name: string): Promise<Permission | null> {
        return this.typeormRepository.findOne({
            where: { name }
        });
    }

    async save(permission: Permission): Promise<Permission> {
        return this.typeormRepository.save(permission);
    }
}