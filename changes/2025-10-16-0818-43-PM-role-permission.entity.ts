export class RolePermission {
    roleId: number;
    permissionId: number;

    constructor(roleId: number, permissionId: number) {
        this.roleId = roleId;
        this.permissionId = permissionId;
    }
}