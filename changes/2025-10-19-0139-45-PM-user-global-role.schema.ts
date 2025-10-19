import { EntitySchema } from 'typeorm';
import { UserGlobalRole } from 'src/domain/entities/user-global-role.entity';

export const UserGlobalRoleSchema = new EntitySchema<UserGlobalRole>({
    name: 'UserGlobalRole',
    target: UserGlobalRole,
    tableName: 'user_global_role',
    columns: {
        userId: { type: 'int', primary: true },
        globalRoleId: { type: 'int', primary: true },
        createdAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
        updatedAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }
    }
});