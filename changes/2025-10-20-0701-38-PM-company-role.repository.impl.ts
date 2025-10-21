import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyRole } from 'src/domain/entities/company-role.entity';
import { CompanyRoleRepository } from 'src/domain/repositories/company-role.repository';
import { CompanyRoleSchema } from '../schema/company-role.schema';

@Injectable()
export class CompanyRoleRepositoryImpl implements CompanyRoleRepository {
    constructor(
        @InjectRepository(CompanyRoleSchema)
        private readonly repository: Repository<CompanyRole>
    ) { }

    async findAll(): Promise<CompanyRole[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<CompanyRole | null> {
        return await this.repository.findOne({ where: { id } });
    }

    async findByCompanyId(companyId: number): Promise<CompanyRole[]> {
        return await this.repository.find({ where: { companyId } });
    }

    async save(companyRole: CompanyRole): Promise<CompanyRole> {
        return await this.repository.save(companyRole);
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}