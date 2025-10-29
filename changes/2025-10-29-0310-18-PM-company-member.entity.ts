export class CompanyMember {
    userId: number;
    companyId: number;
    companyRoleId: number;
    enabled: boolean;

    constructor(
        userId: number,
        companyId: number,
        companyRoleId: number,
        enabled: boolean = true
    ) {
        this.userId = userId;
        this.companyId = companyId;
        this.companyRoleId = companyRoleId;
        this.enabled = enabled;
    }
}