import { Company } from "../entities/company.entity";

export interface CompanyRepository {
    findById(id: number): Promise<Company | null>;
    findByRuc(ruc: string): Promise<Company | null>;
    findByOwnerId(ownerId: number): Promise<Company[]>;
    findAll(): Promise<Company[]>;
    save(company: Company): Promise<Company>;
}

export const COMPANY_REPOSITORY = 'COMPANY_REPOSITORY';