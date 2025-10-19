export class ProfileGlobalRole {
    profileId: number;
    globalRoleId: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(profileId: number, globalRoleId: number, createdAt?: Date, updatedAt?: Date) {
        this.profileId = profileId;
        this.globalRoleId = globalRoleId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}