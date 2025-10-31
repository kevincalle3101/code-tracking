import { CompanyRole } from '../entities/company-role.entity';

export const CompanyRoleRepository = Symbol('CompanyRoleRepository');

export interface CompanyRoleRepository {
    findAll(): Promise<CompanyRole[]>;
    findById(id: number): Promise<CompanyRole | null>;
    findByCompanyId(companyId: number): Promise<CompanyRole[]>;
    save(companyRole: CompanyRole): Promise<CompanyRole>;
    deleteById(id: number): Promise<void>;
}