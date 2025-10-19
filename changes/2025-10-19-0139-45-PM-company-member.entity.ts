export class CompanyMember {
    userId: number;
    companyId: number;
    companyRoleId: number;
    enabled: boolean;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(
        userId: number,
        companyId: number,
        companyRoleId: number,
        enabled: boolean = true,
        createdAt?: Date,
        updatedAt?: Date
    ) {
        this.userId = userId;
        this.companyId = companyId;
        this.companyRoleId = companyRoleId;
        this.enabled = enabled;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}