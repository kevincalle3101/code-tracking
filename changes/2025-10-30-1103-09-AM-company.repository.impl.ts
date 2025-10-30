import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from 'src/domain/entities/company.entity';
import { CompanyRepository } from 'src/domain/repositories/company.repository';
import { CompanySchema } from '../schema/company.schema';

@Injectable()
export class CompanyRepositoryImpl implements CompanyRepository {
    constructor(
        @InjectRepository(CompanySchema)
        private readonly repository: Repository<Company>
    ) { }

    async findAll(): Promise<Company[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Company | null> {
        return await this.repository.findOne({ where: { id } });
    }

    async findByRuc(ruc: string): Promise<Company | null> {
        return await this.repository.findOne({ where: { ruc } });
    }

    async save(company: Company): Promise<Company> {
        return await this.repository.save(company);
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}