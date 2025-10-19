import { EntitySchema } from 'typeorm';
import { User } from 'src/domain/entities/user.entity';

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    tableName: 'user',
    columns: {
        id: { type: 'int', primary: true, generated: 'increment' },
        email: { type: 'varchar', length: 255, nullable: false },
        provider: { type: 'varchar', length: 255, nullable: false },
        cognitoSub: { 
            type: 'varchar', 
            length: 255, 
            nullable: false,
            name: 'cognito_sub' 
        },
        profileId: { 
            type: 'int', 
            nullable: true,
            name: 'profile_id' 
        },
        statusId: { 
            type: 'int', 
            nullable: true,
            name: 'status_id' 
        },
        fullName: { 
            type: 'varchar', 
            length: 255, 
            nullable: true,
            name: 'full_name' 
        },
        phoneNumber: { 
            type: 'varchar', 
            length: 255, 
            nullable: true,
            name: 'phone_number' 
        },
        dateOfBirth: { 
            type: 'date', 
            nullable: true,
            name: 'date_of_birth' 
        },
        gender: { 
            type: 'varchar', 
            length: 255, 
            nullable: true 
        },
        bio: { 
... (truncated for brevity)