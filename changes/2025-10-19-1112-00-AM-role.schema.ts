import { EntitySchema } from 'typeorm';
import { Role } from 'src/domain/entities/role.entity';

export const RoleSchema = new EntitySchema<Role>({
    name: 'Role',
    target: Role,
    tableName: 'role',
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
                name: 'role_permission',
                joinColumn: { name: 'role_id', referencedColumnName: 'id' },
                inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' }
            }
        }
    }
});