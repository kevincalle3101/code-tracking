import { EntitySchema } from 'typeorm';
import { CompanyMember } from 'src/domain/entities/company-member.entity';

export const CompanyMemberSchema = new EntitySchema<CompanyMember>({
    name: 'CompanyMember',
    target: CompanyMember,
    tableName: 'company_member',
    columns: {
        userId: { 
            type: 'int', 
            primary: true,
            name: 'user_id' 
        },
        companyId: { 
            type: 'int', 
            primary: true,
            name: 'company_id' 
        },
        companyRoleId: { 
            type: 'int', 
            primary: true,
            name: 'company_role_id' 
        },
        enabled: { 
            type: 'boolean', 
            default: true 
        }
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'user_id', referencedColumnName: 'id' }
        },
        company: {
            type: 'many-to-one',
            target: 'Company',
            joinColumn: { name: 'company_id', referencedColumnName: 'id' }
        },
        companyRole: {
            type: 'many-to-one',
            target: 'CompanyRole',
            joinColumn: { name: 'company_role_id', referencedColumnName: 'id' }
        }
    }
});