import { EntitySchema } from 'typeorm';
import { Company } from 'src/domain/entities/company.entity';

export const CompanySchema = new EntitySchema<Company>({
    name: 'Company',
    target: Company,
    tableName: 'company',
    columns: {
        id: { type: 'int', primary: true, generated: true },
        ruc: { type: 'varchar', length: 11 },
        name: { type: 'varchar' },
        ownerId: { type: 'int' },
        createdAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
        updatedAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }
    }
});