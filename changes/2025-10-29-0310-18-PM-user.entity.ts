import { Profile } from './profile.entity';
import { Status } from './status.entity';
import { UserGlobalRole } from './user-global-role.entity';
import { CompanyMember } from './company-member.entity';

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
    socialLinks?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: number;
    updatedBy?: number;
    deletedBy?: number;
    profile?: Profile;
    status?: Status;
    userGlobalRoles?: UserGlobalRole[];
    companyMembers?: CompanyMember[];

    constructor(
        email: string,
        provider: string,
        cognitoSub: string,
        profileId?: number,
        statusId?: number,
        fullName?: string,
        phoneNumber?: string,
        dateOfBirth?: Date,
        gender?: string,
        bio?: string,
        website?: string,
        socialLinks?: string,
    ) {
        this.email = email;
        this.provider = provider;
        this.cognitoSub = cognitoSub;
        this.profileId = profileId;
        this.statusId = statusId;
        this.fullName = fullName;
... (truncated for brevity)