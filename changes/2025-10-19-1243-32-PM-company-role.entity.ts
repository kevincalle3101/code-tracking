import { Company } from './company.entity';
import { Permission } from './permission.entity';

export class CompanyRole {
    id?: number;
    name: string;
    description?: string;
    companyId: number;
    isTemplate?: boolean;
    
    // Relations
    company?: Company;
    permissions?: Permission[];
}