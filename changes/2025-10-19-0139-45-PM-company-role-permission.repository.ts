import { CompanyRolePermission } from '../entities/company-role-permission.entity';

export interface CompanyRolePermissionRepository {
    findAll(): Promise<CompanyRolePermission[]>;
    find(companyRoleId: number, permissionId: number): Promise<CompanyRolePermission | null>;
    save(companyRolePermission: CompanyRolePermission): Promise<CompanyRolePermission>;
    delete(companyRoleId: number, permissionId: number): Promise<void>;
}

export const COMPANY_ROLE_PERMISSION_REPOSITORY = 'COMPANY_ROLE_PERMISSION_REPOSITORY';