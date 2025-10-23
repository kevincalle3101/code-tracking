import { Inject, Injectable, Logger } from '@nestjs/common';
import { UserPermissionsService } from 'src/domain/services/user-permissions.service';
import { CACHE_REPOSITORY } from 'src/domain/repositories/cache.repository';
import type { CacheRepository } from 'src/domain/repositories/cache.repository';
import { USER_REPOSITORY } from 'src/domain/repositories/user.repository';
import type { UserRepository } from 'src/domain/repositories/user.repository';
import { PROFILE_REPOSITORY } from 'src/domain/repositories/profile.repository';
import type { ProfileRepository } from 'src/domain/repositories/profile.repository';
import { USER_GLOBAL_ROLE_REPOSITORY } from 'src/domain/repositories/user-global-role.repository';
import type { UserGlobalRoleRepository } from 'src/domain/repositories/user-global-role.repository';
import { GLOBAL_ROLE_PERMISSION_REPOSITORY } from 'src/domain/repositories/global-role-permission.repository';
import type { GlobalRolePermissionRepository } from 'src/domain/repositories/global-role-permission.repository';
import { PERMISSION_REPOSITORY } from 'src/domain/repositories/permission.repository';
import type { PermissionRepository } from 'src/domain/repositories/permission.repository';
import { COMPANY_MEMBER_REPOSITORY } from 'src/domain/repositories/company-member.repository';
import type { CompanyMemberRepository } from 'src/domain/repositories/company-member.repository';
import { COMPANY_REPOSITORY } from 'src/domain/repositories/company.repository';
import type { CompanyRepository } from 'src/domain/repositories/company.repository';
import { COMPANY_ROLE_REPOSITORY } from 'src/domain/repositories/company-role.repository';
import type { CompanyRoleRepository } from 'src/domain/repositories/company-role.repository';
import { COMPANY_ROLE_PERMISSION_REPOSITORY } from 'src/domain/repositories/company-role-permission.repository';
import type { CompanyRolePermissionRepository } from 'src/domain/repositories/company-role-permission.repository';
import type { UserPermissionsResponse } from 'src/domain/services/user-permissions.service';

@Injectable()
export class CreateUserPermissionsService {
    private readonly logger = new Logger(CreateUserPermissionsService.name);
    private readonly userPermissionsService: UserPermissionsService;

    constructor(
        @Inject(CACHE_REPOSITORY)
        private readonly cacheRepository: CacheRepository,
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,
        @Inject(PROFILE_REPOSITORY)
        private readonly profileRepository: ProfileRepository,
        @Inject(USER_GLOBAL_ROLE_REPOSITORY)
        private readonly userGlobalRoleRepository: UserGlobalRoleRepository,
        @Inject(GLOBAL_ROLE_PERMISSION_REPOSITORY)
        private readonly globalRolePermissionRepository: GlobalRolePermissionRepository,
        @Inject(PERMISSION_REPOSITORY)
        private readonly permissionRepository: PermissionRepository,
        @Inject(COMPANY_MEMBER_REPOSITORY)
        private readonly companyMemberRepository: CompanyMemberRepository,
        @Inject(COMPANY_REPOSITORY)
        private readonly companyRepository: CompanyRepository,
        @Inject(COMPANY_ROLE_REPOSITORY)
        private readonly companyRoleRepository: CompanyRoleRepository,
        @Inject(COMPANY_ROLE_PERMISSION_REPOSITORY)
        private readonly companyRolePermissionRepository: CompanyRolePermissionRepository
... (truncated for brevity)