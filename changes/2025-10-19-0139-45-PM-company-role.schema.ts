import { EntitySchema } from 'typeorm';
import { CompanyRole } from 'src/domain/entities/company-role.entity';

export const CompanyRoleSchema = new EntitySchema<CompanyRole>({
    name: 'CompanyRole',
    target: CompanyRole,
    tableName: 'company_role',
    columns: {
        id: { type: 'int', primary: true, generated: true },
        name: { type: 'varchar' },
        description: { type: 'varchar', nullable: true },
        companyId: { type: 'int' },
        isTemplate: { type: 'boolean', default: false },
        createdAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
        updatedAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }
    }
});