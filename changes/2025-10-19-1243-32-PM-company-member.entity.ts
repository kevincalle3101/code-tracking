import { User } from './user.entity';
import { Company } from './company.entity';
import { CompanyRole } from './company-role.entity';

export class CompanyMember {
    userId: number;
    companyId: number;
    companyRoleId: number;
    enabled?: boolean;
    
    // Relations
    user?: User;
    company?: Company;
    companyRole?: CompanyRole;
}