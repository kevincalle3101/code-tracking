import { EntitySchema } from 'typeorm';
import { CompanyRole } from 'src/domain/entities/company-role.entity';

export const CompanyRoleSchema = new EntitySchema<CompanyRole>({
    name: 'CompanyRole',
    target: CompanyRole,
    tableName: 'company_role',
    columns: {
        id: { type: 'int', primary: true, generated: 'increment' },
        name: { type: 'varchar', length: 255, nullable: false },
        description: { type: 'varchar', length: 255, nullable: true },
        companyId: { 
            type: 'int', 
            nullable: false,
            name: 'company_id' 
        },
        isTemplate: { 
            type: 'boolean', 
            default: false,
            name: 'is_template' 
        }
    },
    relations: {
        company: {
            type: 'many-to-one',
            target: 'Company',
            joinColumn: { name: 'company_id', referencedColumnName: 'id' }
        },
        permissions: {
            type: 'many-to-many',
            target: 'Permission',
            joinTable: {
                name: 'company_role_permission',
                joinColumn: { name: 'company_role_id', referencedColumnName: 'id' },
                inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' }
            }
        }
    }
});