import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyRolePermission } from 'src/domain/entities/company-role-permission.entity';
import { CompanyRolePermissionRepository } from 'src/domain/repositories/company-role-permission.repository';
import { CompanyRolePermissionSchema } from '../schema/company-role-permission.schema';

@Injectable()
export class CompanyRolePermissionRepositoryImpl implements CompanyRolePermissionRepository {
    constructor(
        @InjectRepository(CompanyRolePermissionSchema)
        private readonly repository: Repository<CompanyRolePermission>
    ) { }

    async findAll(): Promise<CompanyRolePermission[]> {
        return await this.repository.find();
    }

    async findByCompanyRoleId(companyRoleId: number): Promise<CompanyRolePermission[]> {
        return await this.repository.find({ 
            where: { companyRoleId } 
        });
    }

    async find(companyRoleId: number, permissionId: number): Promise<CompanyRolePermission | null> {
        return await this.repository.findOne({ where: { companyRoleId, permissionId } });
    }

    async save(companyRolePermission: CompanyRolePermission): Promise<CompanyRolePermission> {
        return await this.repository.save(companyRolePermission);
    }

    async delete(companyRoleId: number, permissionId: number): Promise<void> {
        await this.repository.delete({ companyRoleId, permissionId });
    }
}