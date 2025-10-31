import { EntitySchema } from 'typeorm';
import { User } from 'src/domain/entities/user.entity';

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    tableName: 'user',
    columns: {
        id: { name: 'id', type: 'int', primary: true, generated: true },
        email: { name: 'email', type: 'varchar', unique: true },
        provider: { name: 'provider', type: 'varchar' },
        cognitoSub: { name: 'cognito_sub', type: 'varchar', unique: true },
        profileId: { name: 'profile_id', type: 'int', nullable: true },
        statusId: { name: 'status_id', type: 'int' },
        fullName: { name: 'full_name', type: 'varchar', nullable: true },
        phoneNumber: { name: 'phone_number', type: 'varchar', nullable: true },
        dateOfBirth: { name: 'date_of_birth', type: 'date', nullable: true },
        gender: { name: 'gender', type: 'varchar', nullable: true },
        bio: { name: 'bio', type: 'text', nullable: true },
        website: { name: 'website', type: 'varchar', nullable: true },
        socialLinks: { name: 'social_links', type: 'text', nullable: true },
        createdAt: { name: 'created_at', type: 'timestamp', default: () => 'NOW()' },
        updatedAt: { name: 'updated_at', type: 'timestamp', default: () => 'NOW()' },
        deletedAt: { name: 'deleted_at', type: 'timestamp', nullable: true },
        createdBy: { name: 'created_by', type: 'int', nullable: true },
        updatedBy: { name: 'updated_by', type: 'int', nullable: true },
        deletedBy: { name: 'deleted_by', type: 'int', nullable: true }
    },
    relations: {
        profile: {
            type: 'many-to-one',
            target: 'Profile',
            joinColumn: { name: 'profile_id' },
            inverseSide: 'users',
        },
        status: {
            type: 'many-to-one',
            target: 'Status',
            joinColumn: { name: 'status_id' },
            inverseSide: 'users',
        },
        userGlobalRoles: {
            type: 'one-to-many',
            target: 'UserGlobalRole',
            inverseSide: 'user',
        },
        companyMembers: {
            type: 'one-to-many',
            target: 'CompanyMember',
            inverseSide: 'user',
... (truncated for brevity)