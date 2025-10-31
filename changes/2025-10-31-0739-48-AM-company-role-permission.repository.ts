import { CompanyRolePermission } from '../entities/company-role-permission.entity';

export const CompanyRolePermissionRepository = Symbol('CompanyRolePermissionRepository');

export interface CompanyRolePermissionRepository {
    findAll(): Promise<CompanyRolePermission[]>;
    findByCompanyRoleId(companyRoleId: number): Promise<CompanyRolePermission[]>;
    find(companyRoleId: number, permissionId: number): Promise<CompanyRolePermission | null>;
    save(companyRolePermission: CompanyRolePermission): Promise<CompanyRolePermission>;
    delete(companyRoleId: number, permissionId: number): Promise<void>;
}