import { HttpException, HttpStatus } from "@nestjs/common";
import { Company } from "../entities/company.entity";
import type { CompanyRepository } from "../repositories/company.repository";
import type { UserRepository } from "../repositories/user.repository";

export class CompanyRegistrationService {
    constructor(
        private readonly companyRepository: CompanyRepository,
        private readonly userRepository: UserRepository
    ) { }

    async register(company: Company): Promise<{ message: string, data: Company }> {
        const existingCompany = await this.companyRepository.findByRuc(company.ruc);
        if (existingCompany) {
            throw new HttpException(
                `Empresa con RUC ${company.ruc} ya existe`,
                HttpStatus.CONFLICT
            );
        }

        const owner = await this.userRepository.findById(company.ownerId);
        if (!owner) {
            throw new HttpException(
                `Usuario propietario con id ${company.ownerId} no encontrado`,
                HttpStatus.NOT_FOUND
            );
        }

        const now = new Date();
        company.createdAt = now;
        company.updatedAt = now;

        const savedCompany = await this.companyRepository.save(company);

        const { id, ...companyWithoutId } = savedCompany;

        return {
            message: "Empresa registrada correctamente",
            data: companyWithoutId
        };
    }

    async update(companyId: number, companyData: Partial<Company>): Promise<{ message: string, data: Company }> {
        const existingCompany = await this.companyRepository.findById(companyId);
        if (!existingCompany) {
            throw new HttpException(
                `Empresa con id ${companyId} no encontrada`,
                HttpStatus.NOT_FOUND
            );
        }
... (truncated for brevity)