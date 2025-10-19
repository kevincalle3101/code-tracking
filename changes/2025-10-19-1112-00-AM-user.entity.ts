import { Profile } from './profile.entity';
import { Status } from './status.entity';

export class User {
    id?: number;
    email: string;
    provider: string;
    cognitoSub: string;
    profileId?: number;
    statusId?: number;
    fullName?: string;
    phoneNumber?: string;
    dateOfBirth?: Date;
    gender?: string;
    bio?: string;
    website?: string;
    socialLinks?: string; // JSON stored as string
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    
    // Relations
    profile?: Profile;
    status?: Status;
}