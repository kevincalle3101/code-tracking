import { User } from './user.entity';
import { Company } from './company.entity';
import { CompanyRole } from './company-role.entity';

export class CompanyMember {
    userId: number;
    companyId: number;
    companyRoleId: number;
    enabled: boolean;
    user?: User;
    company?: Company;
    companyRole?: CompanyRole;

    constructor(
        userId: number,
        companyId: number,
        companyRoleId: number,
        enabled: boolean = true
    ) {
        this.userId = userId;
        this.companyId = companyId;
        this.companyRoleId = companyRoleId;
        this.enabled = enabled;
    }
}