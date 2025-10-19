export class GlobalRolePermission {
    globalRoleId: number;
    permissionId: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(globalRoleId: number, permissionId: number, createdAt?: Date, updatedAt?: Date) {
        this.globalRoleId = globalRoleId;
        this.permissionId = permissionId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}