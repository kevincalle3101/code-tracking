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
        roles: {
            type: 'many-to-many',
            target: 'Role',
            joinTable: {
                name: 'profile_role',
                joinColumn: { name: 'profile_id', referencedColumnName: 'id' },
                inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' }
            }
        }
    }
});