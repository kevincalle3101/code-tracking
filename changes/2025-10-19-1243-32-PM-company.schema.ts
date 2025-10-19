import { EntitySchema } from 'typeorm';
import { Company } from 'src/domain/entities/company.entity';

export const CompanySchema = new EntitySchema<Company>({
    name: 'Company',
    target: Company,
    tableName: 'company',
    columns: {
        id: { type: 'int', primary: true, generated: 'increment' },
        ruc: { type: 'varchar', length: 11, nullable: false },
        name: { type: 'varchar', length: 255, nullable: false },
        ownerId: { 
            type: 'int', 
            nullable: false,
            name: 'owner_id' 
        },
        createdAt: { 
            type: 'timestamp', 
            default: () => 'CURRENT_TIMESTAMP',
            name: 'created_at' 
        },
        updatedAt: { 
            type: 'timestamp', 
            default: () => 'CURRENT_TIMESTAMP',
            name: 'updated_at' 
        }
    },
    relations: {
        owner: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'owner_id', referencedColumnName: 'id' }
        }
    }
});