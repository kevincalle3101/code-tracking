export class GlobalRole {
    id?: number;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(name: string, description?: string, createdAt?: Date, updatedAt?: Date) {
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}