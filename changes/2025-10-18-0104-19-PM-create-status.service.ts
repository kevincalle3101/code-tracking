import { OrderStatus, ValidDescriptionValues, ValidStatusDescriptions } from "src/shared/enum/order-status";
import { Status } from "../entities/status.entity";
import { StatusRepository } from "../repositories/status.repository";
import { HttpException, HttpStatus } from "@nestjs/common";

export class StatusRegistrationService {
    constructor(private readonly statusRepository: StatusRepository) { }

    async register(description: string, id?: OrderStatus): Promise<Status> {
        const normalizedDescription = description.toUpperCase().trim()

        if (!ValidDescriptionValues.includes(normalizedDescription)) {
            const validValues = Object.entries(ValidStatusDescriptions)
                .map(([statusId, statusDesc]) => `${statusId}: ${statusDesc}`)
                .join(', ')

            throw new Error(`Estado inválido: "${description}". Valores válidos: ${validValues}`)
        }

        const statusId = id || this.getStatusIdFromDescription(normalizedDescription)
        this.validateIdDescriptionMatch(statusId, normalizedDescription)
        await this.checkExistingStatuses(statusId, normalizedDescription)

        const status = new Status()
        status.id = statusId
        status.description = normalizedDescription

        return this.statusRepository.save(status)
    }

    private getStatusIdFromDescription(description: string): OrderStatus {
        const entry = Object.entries(ValidStatusDescriptions)
            .find(([_, desc]) => desc === description)

        if (!entry) throw new Error(`No status ID found for: ${description}`)

        return parseInt(entry[0]) as OrderStatus
    }

    private validateIdDescriptionMatch(id: OrderStatus, description: string): void {
        if (ValidStatusDescriptions[id] != description) {
            throw new Error(`ID ${id} no coincide "${description}". Esperado: "${ValidStatusDescriptions[id]}"`)
        }
    }

    private async checkExistingStatuses(id: OrderStatus, description: string): Promise<void> {
        const existingById = await this.statusRepository.findById(id);
        if (existingById) throw new Error(`EL estado con ${id} ya existe: ${existingById.description}`)

        const existingByDescription = await this.statusRepository.findByDescription(description);
... (truncated for brevity)