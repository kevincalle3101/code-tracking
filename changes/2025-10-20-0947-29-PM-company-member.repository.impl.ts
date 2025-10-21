import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyMember } from 'src/domain/entities/company-member.entity';
import { CompanyMemberRepository } from 'src/domain/repositories/company-member.repository';
import { CompanyMemberSchema } from '../schema/company-member.schema';

@Injectable()
export class CompanyMemberRepositoryImpl implements CompanyMemberRepository {
    constructor(
        @InjectRepository(CompanyMemberSchema)
        private readonly repository: Repository<CompanyMember>
    ) { }

    async findAll(): Promise<CompanyMember[]> {
        return await this.repository.find();
    }

    async find(userId: number, companyId: number, companyRoleId: number): Promise<CompanyMember | null> {
        return await this.repository.findOne({ where: { userId, companyId, companyRoleId } });
    }

    async findByCompanyId(companyId: number): Promise<CompanyMember[]> {
        return await this.repository.find({ where: { companyId } });
    }

    async findByUserId(userId: number): Promise<CompanyMember[]> {
        return await this.repository.find({ where: { userId } });
    }

    async save(companyMember: CompanyMember): Promise<CompanyMember> {
        return await this.repository.save(companyMember);
    }

    async delete(userId: number, companyId: number, companyRoleId: number): Promise<void> {
        await this.repository.delete({ userId, companyId, companyRoleId });
    }
}