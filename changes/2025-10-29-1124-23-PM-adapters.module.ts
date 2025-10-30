import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceSchema } from './database/schema/resource.schema';
import { UserSchema } from './database/schema/user.schema';
import { ProfileSchema } from './database/schema/profile.schema';
import { StatusSchema } from './database/schema/status.schema';
import { GlobalRoleSchema } from './database/schema/global-role.schema';
import { PermissionSchema } from './database/schema/permission.schema';
import { UserGlobalRoleSchema } from './database/schema/user-global-role.schema';
import { ProfileGlobalRoleSchema } from './database/schema/profile-global-role.schema';
import { GlobalRolePermissionSchema } from './database/schema/global-role-permission.schema';
import { CompanySchema } from './database/schema/company.schema';
import { CompanyRoleSchema } from './database/schema/company-role.schema';
import { CompanyRolePermissionSchema } from './database/schema/company-role-permission.schema';
import { CompanyMemberSchema } from './database/schema/company-member.schema';
import { ResourceRepositoryImpl } from './database/repositories/resource.repository.impl';
import { UserRepositoryImpl } from './database/repositories/user.repository.impl';
import { ProfileRepositoryImpl } from './database/repositories/profile.repository.impl';
import { PermissionRepositoryImpl } from './database/repositories/permission.repository.impl';
import { UserGlobalRoleRepositoryImpl } from './database/repositories/user-global-role.repository.impl';
import { ProfileGlobalRoleRepositoryImpl } from './database/repositories/profile-global-role.repository.impl';
import { GlobalRolePermissionRepositoryImpl } from './database/repositories/global-role-permission.repository.impl';
import { CompanyRepositoryImpl } from './database/repositories/company.repository.impl';
import { CompanyRoleRepositoryImpl } from './database/repositories/company-role.repository.impl';
import { CompanyRolePermissionRepositoryImpl } from './database/repositories/company-role-permission.repository.impl';
import { CompanyMemberRepositoryImpl } from './database/repositories/company-member.repository.impl';
import { CacheRepositoryImpl } from './cache/repositories/cache.repository.impl';
import { RESOURCE_REPOSITORY } from '../../domain/repositories/resource.repository';
import { USER_REPOSITORY } from '../../domain/repositories/user.repository';
import { PROFILE_REPOSITORY } from '../../domain/repositories/profile.repository';
import { PERMISSION_REPOSITORY } from '../../domain/repositories/permission.repository';
import { USER_GLOBAL_ROLE_REPOSITORY } from '../../domain/repositories/user-global-role.repository';
import { PROFILE_GLOBAL_ROLE_REPOSITORY } from '../../domain/repositories/profile-global-role.repository';
import { GLOBAL_ROLE_PERMISSION_REPOSITORY } from '../../domain/repositories/global-role-permission.repository';
import { COMPANY_REPOSITORY } from '../../domain/repositories/company.repository';
import { COMPANY_ROLE_REPOSITORY } from '../../domain/repositories/company-role.repository';
import { COMPANY_ROLE_PERMISSION_REPOSITORY } from '../../domain/repositories/company-role-permission.repository';
import { COMPANY_MEMBER_REPOSITORY } from '../../domain/repositories/company-member.repository';
import { CACHE_REPOSITORY } from '../../domain/repositories/cache.repository';
import { S3Adapter } from './aws/s3.adapter';
import { RedisAdapter } from './cache/redis.adapter';
import { DbConfig } from '../../infrastructure/config/interfaces/db-config.interface';
import { AppConfig } from '../../infrastructure/config/interfaces/app-config.interface';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
... (truncated for brevity)