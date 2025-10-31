import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreatePermissionService } from 'src/domain/services/create-permission.service';
import { PermissionMapper } from '../mappers/permission.mapper';
import { PermissionResponseDto } from '../dtos/permission-response.dto';
import { CacheRepository } from 'src/domain/repositories/cache.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { ProfileRepository } from 'src/domain/repositories/profile.repository';
import { UserGlobalRoleRepository } from 'src/domain/repositories/user-global-role.repository';
import { ProfileGlobalRoleRepository } from 'src/domain/repositories/profile-global-role.repository';
import { GlobalRolePermissionRepository } from 'src/domain/repositories/global-role-permission.repository';
import { PermissionRepository } from 'src/domain/repositories/permission.repository';
import { CompanyMemberRepository } from 'src/domain/repositories/company-member.repository';
import { CompanyRepository } from 'src/domain/repositories/company.repository';
import { CompanyRoleRepository } from 'src/domain/repositories/company-role.repository';
import { CompanyRolePermissionRepository } from 'src/domain/repositories/company-role-permission.repository';

@Injectable()
export class PermissionService {
    private readonly logger = new Logger(PermissionService.name);
    private readonly createPermissionService: CreatePermissionService;

    constructor(
        @Inject(CacheRepository)
        private readonly cacheRepository: CacheRepository,
        @Inject(UserRepository)
        private readonly userRepository: UserRepository,
        @Inject(ProfileRepository)
        private readonly profileRepository: ProfileRepository,
        @Inject(UserGlobalRoleRepository)
        private readonly userGlobalRoleRepository: UserGlobalRoleRepository,
        @Inject(ProfileGlobalRoleRepository)
        private readonly profileGlobalRoleRepository: ProfileGlobalRoleRepository,
        @Inject(GlobalRolePermissionRepository)
        private readonly globalRolePermissionRepository: GlobalRolePermissionRepository,
        @Inject(PermissionRepository)
        private readonly permissionRepository: PermissionRepository,
        @Inject(CompanyMemberRepository)
        private readonly companyMemberRepository: CompanyMemberRepository,
        @Inject(CompanyRepository)
        private readonly companyRepository: CompanyRepository,
        @Inject(CompanyRoleRepository)
        private readonly companyRoleRepository: CompanyRoleRepository,
        @Inject(CompanyRolePermissionRepository)
        private readonly companyRolePermissionRepository: CompanyRolePermissionRepository,
        private readonly permissionMapper: PermissionMapper,
    ) {
        this.createPermissionService = new CreatePermissionService(
            this.cacheRepository,
            this.userRepository,
            this.profileRepository,
... (truncated for brevity)