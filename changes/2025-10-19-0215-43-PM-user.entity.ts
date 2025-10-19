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
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.bio = bio;
        this.website = website;
        this.socialLinks = socialLinks;
    }
}