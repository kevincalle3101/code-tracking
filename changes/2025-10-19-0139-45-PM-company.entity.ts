export class Company {
    id?: number;
    ruc: string;
    name: string;
    ownerId: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(ruc: string, name: string, ownerId: number, createdAt?: Date, updatedAt?: Date) {
        this.ruc = ruc;
        this.name = name;
        this.ownerId = ownerId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}