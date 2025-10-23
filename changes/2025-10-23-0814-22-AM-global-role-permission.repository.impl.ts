import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { GlobalRolePermission } from 'src/domain/entities/global-role-permission.entity';
import { GlobalRolePermissionRepository } from 'src/domain/repositories/global-role-permission.repository';
import { GlobalRolePermissionSchema } from '../schema/global-role-permission.schema';

@Injectable()
export class GlobalRolePermissionRepositoryImpl implements GlobalRolePermissionRepository {
    constructor(
        @InjectRepository(GlobalRolePermissionSchema)
        private readonly repository: Repository<GlobalRolePermission>
    ) { }

    async findAll(): Promise<GlobalRolePermission[]> {
        return await this.repository.find();
    }

    async findByGlobalRoleIds(globalRoleIds: number[]): Promise<GlobalRolePermission[]> {
        if (globalRoleIds.length === 0) return [];
        return await this.repository.find({ 
            where: { globalRoleId: In(globalRoleIds) } 
        });
    }

    async find(globalRoleId: number, permissionId: number): Promise<GlobalRolePermission | null> {
        return await this.repository.findOne({ where: { globalRoleId, permissionId } });
    }

    async save(globalRolePermission: GlobalRolePermission): Promise<GlobalRolePermission> {
        return await this.repository.save(globalRolePermission);
    }

    async delete(globalRoleId: number, permissionId: number): Promise<void> {
        await this.repository.delete({ globalRoleId, permissionId });
    }
}