import { HttpException, HttpStatus } from "@nestjs/common";
import type { UserRepository } from "../repositories/user.repository";
import type { ProfileRepository } from "../repositories/profile.repository";
import type { UserGlobalRoleRepository } from "../repositories/user-global-role.repository";
import type { GlobalRolePermissionRepository } from "../repositories/global-role-permission.repository";
import type { PermissionRepository } from "../repositories/permission.repository";
import type { CompanyMemberRepository } from "../repositories/company-member.repository";
import type { CompanyRepository } from "../repositories/company.repository";
import type { CompanyRoleRepository } from "../repositories/company-role.repository";
import type { CompanyRolePermissionRepository } from "../repositories/company-role-permission.repository";

export interface UserPermissionsResponse {
    user: {
        id: number;
        email: string;
        profile: {
            id: number;
            name: string;
        } | null;
    };
    global_permissions: string[];
    company_memberships: Array<{
        company_id: number;
        company_name: string;
        role: string;
        permissions: string[];
    }>;
}

export class UserPermissionsService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly profileRepository: ProfileRepository,
        private readonly userGlobalRoleRepository: UserGlobalRoleRepository,
        private readonly globalRolePermissionRepository: GlobalRolePermissionRepository,
        private readonly permissionRepository: PermissionRepository,
        private readonly companyMemberRepository: CompanyMemberRepository,
        private readonly companyRepository: CompanyRepository,
        private readonly companyRoleRepository: CompanyRoleRepository,
        private readonly companyRolePermissionRepository: CompanyRolePermissionRepository
    ) { }

    async getUserPermissions(userId: number): Promise<UserPermissionsResponse> {

        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new HttpException(
                `Usuario con id ${userId} no encontrado`,
                HttpStatus.NOT_FOUND
            );
... (truncated for brevity)