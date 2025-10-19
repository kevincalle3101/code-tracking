import { EntitySchema } from 'typeorm';
import { CompanyMember } from 'src/domain/entities/company-member.entity';

export const CompanyMemberSchema = new EntitySchema<CompanyMember>({
    name: 'CompanyMember',
    target: CompanyMember,
    tableName: 'company_member',
    columns: {
        userId: { type: 'int', primary: true },
        companyId: { type: 'int', primary: true },
        companyRoleId: { type: 'int', primary: true },
        enabled: { type: 'boolean', default: true },
        createdAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
        updatedAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }
    }
});