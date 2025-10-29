import { GlobalRolePermission } from './global-role-permission.entity';
import { CompanyRolePermission } from './company-role-permission.entity';

export class Permission {
    id?: number;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    globalRolePermissions?: GlobalRolePermission[];
    companyRolePermissions?: CompanyRolePermission[];

    constructor(name: string, description?: string) {
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}