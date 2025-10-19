import { EntitySchema } from 'typeorm';
import { GlobalRole } from 'src/domain/entities/global-role.entity';

export const GlobalRoleSchema = new EntitySchema<GlobalRole>({
    name: 'GlobalRole',
    target: GlobalRole,
    tableName: 'global_role',
    columns: {
        id: { type: 'int', primary: true, generated: true },
        name: { type: 'varchar' },
        description: { type: 'varchar', nullable: true },
        createdAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
        updatedAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }
    }
});