import { CompanyRole } from './company-role.entity';
import { Permission } from './permission.entity';

export class CompanyRolePermission {
    companyRoleId: number;
    permissionId: number;
    companyRole?: CompanyRole;
    permission?: Permission;

    constructor(companyRoleId: number, permissionId: number) {
        this.companyRoleId = companyRoleId;
        this.permissionId = permissionId;
    }
}