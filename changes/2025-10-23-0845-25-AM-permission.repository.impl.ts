import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Permission } from 'src/domain/entities/permission.entity';
import { PermissionRepository } from 'src/domain/repositories/permission.repository';
import { PermissionSchema } from '../schema/permission.schema';

@Injectable()
export class PermissionRepositoryImpl implements PermissionRepository {
    constructor(
        @InjectRepository(PermissionSchema)
        private readonly repository: Repository<Permission>
    ) { }

    async findAll(): Promise<Permission[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Permission | null> {
        return await this.repository.findOne({ where: { id } });
    }

    async findByIds(ids: number[]): Promise<Permission[]> {
        if (ids.length === 0) return [];
        return await this.repository.find({ 
            where: { id: In(ids) } 
        });
    }

    async findByName(name: string): Promise<Permission | null> {
        return await this.repository.findOne({ where: { name } });
    }

    async save(permission: Permission): Promise<Permission> {
        return await this.repository.save(permission);
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}