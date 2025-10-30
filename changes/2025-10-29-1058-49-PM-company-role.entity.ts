import { Company } from './company.entity';
import { CompanyMember} from './company-member.entity';
import { CompanyRolePermission } from './company-role-permission.entity';

export class CompanyRole {
    id?: number;
    name: string;
    description?: string;
    companyId: number;
    isTemplate: boolean;
    company?: Company;
    companyMembers?: CompanyMember[];
    companyRolePermissions?: CompanyRolePermission[];

    constructor(
        name: string,
        companyId: number,
        isTemplate: boolean = false,
        description?: string,
    ) {
        this.name = name;
        this.companyId = companyId;
        this.isTemplate = isTemplate;
        this.description = description;
    }
}