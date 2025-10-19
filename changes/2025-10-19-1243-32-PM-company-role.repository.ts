import { CompanyRole } from "../entities/company-role.entity";

export interface CompanyRoleRepository {
    findById(id: number): Promise<CompanyRole | null>;
    findByCompanyId(companyId: number): Promise<CompanyRole[]>;
    findTemplates(companyId: number): Promise<CompanyRole[]>;
    findAll(): Promise<CompanyRole[]>;
    save(companyRole: CompanyRole): Promise<CompanyRole>;
}

export const COMPANY_ROLE_REPOSITORY = 'COMPANY_ROLE_REPOSITORY';