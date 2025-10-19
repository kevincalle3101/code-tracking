import { EntitySchema } from 'typeorm';
import { Profile } from 'src/domain/entities/profile.entity';

export const ProfileSchema = new EntitySchema<Profile>({
    name: 'Profile',
    target: Profile,
    tableName: 'profile',
    columns: {
        id: { type: 'int', primary: true, generated: 'increment' },
        name: { type: 'varchar', length: 255, nullable: false },
        description: { type: 'varchar', length: 255, nullable: true }
    },
    relations: {
        globalRoles: {
            type: 'many-to-many',
            target: 'GlobalRole',
            joinTable: {
                name: 'profile_global_role',
                joinColumn: { name: 'profile_id', referencedColumnName: 'id' },
                inverseJoinColumn: { name: 'global_role_id', referencedColumnName: 'id' }
            }
        }
    }
});