export class CompanyRole {
    id?: number;
    name: string;
    description?: string;
    companyId: number;
    isTemplate: boolean;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(
        name: string,
        companyId: number,
        isTemplate: boolean = false,
        description?: string,
        createdAt?: Date,
        updatedAt?: Date
    ) {
        this.name = name;
        this.companyId = companyId;
        this.isTemplate = isTemplate;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}