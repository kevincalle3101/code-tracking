import { EntitySchema } from 'typeorm';
import { User } from 'src/domain/entities/user.entity';

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
        id: { type: 'int', primary: true, generated: true },
        email: { type: 'varchar', unique: true },
        provider: { type: 'varchar' },
        cognitoSub: { type: 'char', unique: true },
        profileId: { type: 'int', nullable: true },
        statusId: { type: 'int', nullable: true },
        fullName: { type: 'varchar', nullable: true },
        phoneNumber: { type: 'varchar', nullable: true },
        dateOfBirth: { type: 'date', nullable: true },
        gender: { type: 'varchar', nullable: true },
        bio: { type: 'text', nullable: true },
        website: { type: 'varchar', nullable: true },
        socialLinks: { type: 'text', nullable: true },
        createdAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
        updatedAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
        deletedAt: { type: 'timestamp', nullable: true }
    }
});