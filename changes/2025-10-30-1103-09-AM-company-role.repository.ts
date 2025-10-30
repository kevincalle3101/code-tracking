import { CompanyRole } from '../entities/company-role.entity';

export interface CompanyRoleRepository {
    findAll(): Promise<CompanyRole[]>;
    findById(id: number): Promise<CompanyRole | null>;
    findByCompanyId(companyId: number): Promise<CompanyRole[]>;
    save(companyRole: CompanyRole): Promise<CompanyRole>;
    deleteById(id: number): Promise<void>;
}

export const COMPANY_ROLE_REPOSITORY = 'COMPANY_ROLE_REPOSITORY';