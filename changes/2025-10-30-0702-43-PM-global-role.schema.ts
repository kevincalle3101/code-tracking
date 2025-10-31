import { EntitySchema } from 'typeorm';
import { GlobalRole } from 'src/domain/entities/global-role.entity';

export const GlobalRoleSchema = new EntitySchema<GlobalRole>({
    name: 'GlobalRole',
    target: GlobalRole,
    tableName: 'global_role',
    columns: {
        id: { name: 'id', type: 'int', primary: true, generated: true },
        name: { name: 'name', type: 'varchar' },
        description: { name: 'description', type: 'varchar', nullable: true }
    },
    relations: {
        userGlobalRoles: {
            type: 'one-to-many',
            target: 'UserGlobalRole',
            inverseSide: 'globalRole',
        },
        profileGlobalRoles: {
            type: 'one-to-many',
            target: 'ProfileGlobalRole',
            inverseSide: 'globalRole',
        },
        globalRolePermissions: {
            type: 'one-to-many',
            target: 'GlobalRolePermission',
            inverseSide: 'globalRole',
        }
    }
});