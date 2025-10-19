import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyRepository } from 'src/domain/repositories/company.repository';
import { Company } from 'src/domain/entities/company.entity';
import { CompanySchema } from '../schema/company.schema';

@Injectable()
export class CompanyRepositoryImpl implements CompanyRepository {
    constructor(
        @InjectRepository(CompanySchema)
        private readonly typeormRepository: Repository<Company>
    ) { }

    async findAll(): Promise<Company[]> {
        return this.typeormRepository.find({ relations: ['owner'] });
    }

    async findById(id: number): Promise<Company | null> {
        return this.typeormRepository.findOne({
            where: { id },
            relations: ['owner']
        });
    }

    async findByRuc(ruc: string): Promise<Company | null> {
        return this.typeormRepository.findOne({
            where: { ruc },
            relations: ['owner']
        });
    }

    async findByOwnerId(ownerId: number): Promise<Company[]> {
        return this.typeormRepository.find({
            where: { ownerId },
            relations: ['owner']
        });
    }

    async save(company: Company): Promise<Company> {
        return this.typeormRepository.save(company);
    }
}