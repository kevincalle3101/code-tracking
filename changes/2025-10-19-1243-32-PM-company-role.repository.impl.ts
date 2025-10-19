import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyRoleRepository } from 'src/domain/repositories/company-role.repository';
import { CompanyRole } from 'src/domain/entities/company-role.entity';
import { CompanyRoleSchema } from '../schema/company-role.schema';

@Injectable()
export class CompanyRoleRepositoryImpl implements CompanyRoleRepository {
    constructor(
        @InjectRepository(CompanyRoleSchema)
        private readonly typeormRepository: Repository<CompanyRole>
    ) { }

    async findAll(): Promise<CompanyRole[]> {
        return this.typeormRepository.find({ 
            relations: ['company', 'permissions'] 
        });
    }

    async findById(id: number): Promise<CompanyRole | null> {
        return this.typeormRepository.findOne({
            where: { id },
            relations: ['company', 'permissions']
        });
    }

    async findByCompanyId(companyId: number): Promise<CompanyRole[]> {
        return this.typeormRepository.find({
            where: { companyId },
            relations: ['company', 'permissions']
        });
    }

    async findTemplates(companyId: number): Promise<CompanyRole[]> {
        return this.typeormRepository.find({
            where: { companyId, isTemplate: true },
            relations: ['company', 'permissions']
        });
    }

    async save(companyRole: CompanyRole): Promise<CompanyRole> {
        return this.typeormRepository.save(companyRole);
    }
}