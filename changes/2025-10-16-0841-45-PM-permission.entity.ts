export class Permission {
    id?: number;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(name: string, description?: string) {
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}