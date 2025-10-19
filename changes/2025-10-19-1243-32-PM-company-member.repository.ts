import { CompanyMember } from "../entities/company-member.entity";

export interface CompanyMemberRepository {
    findByUserId(userId: number): Promise<CompanyMember[]>;
    findByCompanyId(companyId: number): Promise<CompanyMember[]>;
    findByUserAndCompany(userId: number, companyId: number): Promise<CompanyMember[]>;
    findAll(): Promise<CompanyMember[]>;
    save(companyMember: CompanyMember): Promise<CompanyMember>;
    delete(userId: number, companyId: number, companyRoleId: number): Promise<void>;
}

export const COMPANY_MEMBER_REPOSITORY = 'COMPANY_MEMBER_REPOSITORY';