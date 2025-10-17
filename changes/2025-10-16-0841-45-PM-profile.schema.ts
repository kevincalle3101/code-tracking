import { EntitySchema } from 'typeorm';
import { Profile } from 'src/domain/entities/profile.entity';

export const ProfileSchema = new EntitySchema<Profile>({
    name: 'Profile',
    target: Profile,
    columns: {
        id: { type: 'int', primary: true, generated: true },
        name: { type: 'varchar' },
        description: { type: 'varchar' },
        createdAt: { type: 'timestamp', default: () => 'NOW()' },
        updatedAt: { type: 'timestamp', default: () => 'NOW()' }
    }
});