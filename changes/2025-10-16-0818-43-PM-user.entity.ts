export class User {
    id?: number;
    email: string;
    provider: string;
    cognitoSub: string;
    profileId?: number;
    statusId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(
        email: string,
        provider: string,
        cognitoSub: string,
        profileId?: number,
        statusId?: number,
        createdAt?: Date,
        updatedAt?: Date,
        deletedAt?: Date
    ) {
        this.email = email;
        this.provider = provider;
        this.cognitoSub = cognitoSub;
        this.profileId = profileId;
        this.statusId = statusId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}