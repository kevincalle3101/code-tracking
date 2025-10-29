import { EntitySchema } from 'typeorm';
import { Company } from 'src/domain/entities/company.entity';

export const CompanySchema = new EntitySchema<Company>({
    name: 'Company',
    target: Company,
    tableName: 'company',
    columns: {
        id: { name: 'id', type: 'int', primary: true, generated: true },
        ruc: { name: 'ruc', type: 'varchar', length: 11 },
        name: { name: 'name', type: 'varchar' },
        ownerId: { name: 'owner_id', type: 'int' },
        createdAt: { name: 'created_at', type: 'timestamp', default: () => 'NOW()', nullable: true },
        updatedAt: { name: 'updated_at', type: 'timestamp', default: () => 'NOW()', nullable: true }
    },
    relations: {
        companyRoles: {
            type: 'one-to-many',
            target: 'CompanyRole',
            inverseSide: 'company',
        },
        companyMembers: {
            type: 'one-to-many',
            target: 'CompanyMember',
            inverseSide: 'company',
        }
    }
});