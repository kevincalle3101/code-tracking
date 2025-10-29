import { EntitySchema } from 'typeorm';
import { Profile } from 'src/domain/entities/profile.entity';

export const ProfileSchema = new EntitySchema<Profile>({
    name: 'Profile',
    target: Profile,
    tableName: 'profile',
    columns: {
        id: { name: 'id', type: 'int', primary: true, generated: true },
        name: { name: 'name', type: 'varchar' },
        description: { name: 'description', type: 'varchar', nullable: true },
        createdAt: { name: 'created_at', type: 'timestamp', default: () => 'NOW()', nullable: true },
        updatedAt: { name: 'updated_at', type: 'timestamp', default: () => 'NOW()', nullable: true }
    },
    relations: {
        users: {
            type: 'one-to-many',
            target: 'User',
            inverseSide: 'profile',
        },
        profileGlobalRoles: {
            type: 'one-to-many',
            target: 'ProfileGlobalRole',
            inverseSide: 'profile',
        }
    }
});