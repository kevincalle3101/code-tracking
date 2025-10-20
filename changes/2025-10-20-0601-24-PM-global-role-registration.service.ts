import { HttpException, HttpStatus } from "@nestjs/common";
import { GlobalRole } from "../entities/global-role.entity";
import type { GlobalRoleRepository } from "../repositories/global-role.repository";

export class GlobalRoleRegistrationService {
    constructor(
        private readonly globalRoleRepository: GlobalRoleRepository
    ) { }

    async register(globalRole: GlobalRole): Promise<{ message: string, data: GlobalRole }> {
        const existingRole = await this.globalRoleRepository.findByName(globalRole.name);
        if (existingRole) {
            throw new HttpException(
                `Rol global con nombre ${globalRole.name} ya existe`,
                HttpStatus.CONFLICT
            );
        }

        const now = new Date();

        const savedRole = await this.globalRoleRepository.save(globalRole);

        const { id, ...roleWithoutId } = savedRole;

        return {
            message: "Rol global registrado correctamente",
            data: roleWithoutId
        };
    }

    async update(roleId: number, roleData: Partial<GlobalRole>): Promise<{ message: string, data: GlobalRole }> {
        const existingRole = await this.globalRoleRepository.findById(roleId);
        if (!existingRole) {
            throw new HttpException(
                `Rol global con id ${roleId} no encontrado`,
                HttpStatus.NOT_FOUND
            );
        }

        Object.assign(existingRole, {
            ...(roleData.name && { name: roleData.name }),
            ...(roleData.description && { description: roleData.description }),
            updatedAt: new Date()
        });

        const savedRole = await this.globalRoleRepository.save(existingRole);

        const { id, ...roleWithoutId } = savedRole;

        return {
... (truncated for brevity)