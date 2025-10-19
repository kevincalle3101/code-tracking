export class CompanyRolePermission {
    companyRoleId: number;
    permissionId: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(companyRoleId: number, permissionId: number, createdAt?: Date, updatedAt?: Date) {
        this.companyRoleId = companyRoleId;
        this.permissionId = permissionId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}