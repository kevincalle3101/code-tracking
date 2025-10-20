export class UserGlobalRole {
    userId: number;
    globalRoleId: number;
    constructor(userId: number, globalRoleId: number) {
        this.userId = userId;
        this.globalRoleId = globalRoleId;
    }
}