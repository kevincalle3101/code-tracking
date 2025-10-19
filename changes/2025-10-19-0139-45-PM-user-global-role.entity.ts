export class UserGlobalRole {
    userId: number;
    globalRoleId: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(userId: number, globalRoleId: number, createdAt?: Date, updatedAt?: Date) {
        this.userId = userId;
        this.globalRoleId = globalRoleId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}