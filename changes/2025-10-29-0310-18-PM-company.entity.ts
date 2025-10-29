import { CompanyRole } from './company-role.entity';
import { CompanyMember } from './company-member.entity';

export class Company {
    id?: number;
    ruc: string;
    name: string;
    ownerId: number;
    createdAt?: Date;
    updatedAt?: Date;
    companyRoles?: CompanyRole[];
    companyMembers?: CompanyMember[];

    constructor(ruc: string, name: string, ownerId: number) {
        this.ruc = ruc;
        this.name = name;
        this.ownerId = ownerId;
    }
}