import { CompanyMember } from '../entities/company-member.entity';

export interface CompanyMemberRepository {
    findAll(): Promise<CompanyMember[]>;
    find(userId: number, companyId: number, companyRoleId: number): Promise<CompanyMember | null>;
    findByCompanyId(companyId: number): Promise<CompanyMember[]>;
    findByUserId(userId: number): Promise<CompanyMember[]>;
    save(companyMember: CompanyMember): Promise<CompanyMember>;
    delete(userId: number, companyId: number, companyRoleId: number): Promise<void>;
}

export const COMPANY_MEMBER_REPOSITORY = 'COMPANY_MEMBER_REPOSITORY';