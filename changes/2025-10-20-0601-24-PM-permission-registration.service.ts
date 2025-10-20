import { HttpException, HttpStatus } from "@nestjs/common";
import { Permission } from "../entities/permission.entity";
import type { PermissionRepository } from "../repositories/permission.repository";

export class PermissionRegistrationService {
    constructor(
        private readonly permissionRepository: PermissionRepository
    ) { }

    async register(permission: Permission): Promise<{ message: string, data: Permission }> {
        const existingPermission = await this.permissionRepository.findByName(permission.name);
        if (existingPermission) {
            throw new HttpException(
                `Permiso con nombre ${permission.name} ya existe`,
                HttpStatus.CONFLICT
            );
        }

        const now = new Date();
        permission.createdAt = now;
        permission.updatedAt = now;

        const savedPermission = await this.permissionRepository.save(permission);

        const { id, ...permissionWithoutId } = savedPermission;

        return {
            message: "Permiso registrado correctamente",
            data: permissionWithoutId
        };
    }

    async update(permissionId: number, permissionData: Partial<Permission>): Promise<{ message: string, data: Permission }> {
        const existingPermission = await this.permissionRepository.findById(permissionId);
        if (!existingPermission) {
            throw new HttpException(
                `Permiso con id ${permissionId} no encontrado`,
                HttpStatus.NOT_FOUND
            );
        }

        Object.assign(existingPermission, {
            ...(permissionData.name && { name: permissionData.name }),
            ...(permissionData.description && { description: permissionData.description }),
            updatedAt: new Date()
        });

        const savedPermission = await this.permissionRepository.save(existingPermission);

        const { id, ...permissionWithoutId } = savedPermission;
... (truncated for brevity)