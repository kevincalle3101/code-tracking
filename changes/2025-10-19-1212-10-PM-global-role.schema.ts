import { EntitySchema } from 'typeorm';
import { GlobalRole } from 'src/domain/entities/global-role.entity';

export const GlobalRoleSchema = new EntitySchema<GlobalRole>({
    name: 'GlobalRole',
    target: GlobalRole,
    tableName: 'global_role',
    columns: {
        id: { type: 'int', primary: true, generated: 'increment' },
        name: { type: 'varchar', length: 255, nullable: false },
        description: { type: 'varchar', length: 255, nullable: true }
    },
    relations: {
        permissions: {
            type: 'many-to-many',
            target: 'Permission',
            joinTable: {
                name: 'global_role_permission',
                joinColumn: { name: 'global_role_id', referencedColumnName: 'id' },
                inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' }
            }
        }
    }
});