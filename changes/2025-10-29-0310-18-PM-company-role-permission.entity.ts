export class CompanyRolePermission {
    companyRoleId: number;
    permissionId: number;

    constructor(companyRoleId: number, permissionId: number) {
        this.companyRoleId = companyRoleId;
        this.permissionId = permissionId;
    }
}