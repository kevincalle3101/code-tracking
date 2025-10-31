import { Company } from '../entities/company.entity';

export const CompanyRepository = Symbol('CompanyRepository');

export interface CompanyRepository {
    findAll(): Promise<Company[]>;
    findById(id: number): Promise<Company | null>;
    findByRuc(ruc: string): Promise<Company | null>;
    save(company: Company): Promise<Company>;
    deleteById(id: number): Promise<void>;
}