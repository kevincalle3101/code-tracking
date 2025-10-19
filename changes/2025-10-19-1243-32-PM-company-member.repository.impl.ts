import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyMemberRepository } from 'src/domain/repositories/company-member.repository';
import { CompanyMember } from 'src/domain/entities/company-member.entity';
import { CompanyMemberSchema } from '../schema/company-member.schema';

@Injectable()
export class CompanyMemberRepositoryImpl implements CompanyMemberRepository {
    constructor(
        @InjectRepository(CompanyMemberSchema)
        private readonly typeormRepository: Repository<CompanyMember>
    ) { }

    async findAll(): Promise<CompanyMember[]> {
        return this.typeormRepository.find({ 
            relations: ['user', 'company', 'companyRole'] 
        });
    }

    async findByUserId(userId: number): Promise<CompanyMember[]> {
        return this.typeormRepository.find({
            where: { userId },
            relations: ['user', 'company', 'companyRole']
        });
    }

    async findByCompanyId(companyId: number): Promise<CompanyMember[]> {
        return this.typeormRepository.find({
            where: { companyId },
            relations: ['user', 'company', 'companyRole']
        });
    }

    async findByUserAndCompany(userId: number, companyId: number): Promise<CompanyMember[]> {
        return this.typeormRepository.find({
            where: { userId, companyId },
            relations: ['user', 'company', 'companyRole']
        });
    }

    async save(companyMember: CompanyMember): Promise<CompanyMember> {
        return this.typeormRepository.save(companyMember);
    }

    async delete(userId: number, companyId: number, companyRoleId: number): Promise<void> {
        await this.typeormRepository.delete({ userId, companyId, companyRoleId });
    }
}