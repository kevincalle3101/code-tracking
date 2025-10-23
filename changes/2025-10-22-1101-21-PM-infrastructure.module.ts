import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RestController } from './controllers/rest.controller';
import { PermissionsController } from './controllers/permissions.controller';
import { ResourceRepositoryImpl } from './adapters/database/repositories/resource.repository.impl';
import { UserRepositoryImpl } from './adapters/database/repositories/user.repository.impl';
import { ProfileRepositoryImpl } from './adapters/database/repositories/profile.repository.impl';
import { PermissionRepositoryImpl } from './adapters/database/repositories/permission.repository.impl';
import { UserGlobalRoleRepositoryImpl } from './adapters/database/repositories/user-global-role.repository.impl';
import { GlobalRolePermissionRepositoryImpl } from './adapters/database/repositories/global-role-permission.repository.impl';
import { CompanyRepositoryImpl } from './adapters/database/repositories/company.repository.impl';
import { CompanyRoleRepositoryImpl } from './adapters/database/repositories/company-role.repository.impl';
import { CompanyRolePermissionRepositoryImpl } from './adapters/database/repositories/company-role-permission.repository.impl';
import { CompanyMemberRepositoryImpl } from './adapters/database/repositories/company-member.repository.impl';
import { RESOURCE_REPOSITORY } from '../domain/repositories/resource.repository';
import { USER_REPOSITORY } from '../domain/repositories/user.repository';
import { PROFILE_REPOSITORY } from '../domain/repositories/profile.repository';
import { PERMISSION_REPOSITORY } from '../domain/repositories/permission.repository';
import { USER_GLOBAL_ROLE_REPOSITORY } from '../domain/repositories/user-global-role.repository';
import { GLOBAL_ROLE_PERMISSION_REPOSITORY } from '../domain/repositories/global-role-permission.repository';
import { COMPANY_REPOSITORY } from '../domain/repositories/company.repository';
import { COMPANY_ROLE_REPOSITORY } from '../domain/repositories/company-role.repository';
import { COMPANY_ROLE_PERMISSION_REPOSITORY } from '../domain/repositories/company-role-permission.repository';
import { COMPANY_MEMBER_REPOSITORY } from '../domain/repositories/company-member.repository';
import { ResourceSchema } from './adapters/database/schema/resource.schema';
import { UserSchema } from './adapters/database/schema/user.schema';
import { ProfileSchema } from './adapters/database/schema/profile.schema';
import { PermissionSchema } from './adapters/database/schema/permission.schema';
import { UserGlobalRoleSchema } from './adapters/database/schema/user-global-role.schema';
import { GlobalRolePermissionSchema } from './adapters/database/schema/global-role-permission.schema';
import { CompanySchema } from './adapters/database/schema/company.schema';
import { CompanyRoleSchema } from './adapters/database/schema/company-role.schema';
import { CompanyRolePermissionSchema } from './adapters/database/schema/company-role-permission.schema';
import { CompanyMemberSchema } from './adapters/database/schema/company-member.schema';
import { ApplicationModule } from '../application/application.module';
import { S3Adapter } from './adapters/aws/s3.adapter';
import { RedisAdapter } from './adapters/cache/redis.adapter';
import { CacheRepositoryImpl } from './adapters/cache/repositories/cache.repository.impl';
import { CACHE_REPOSITORY } from '../domain/repositories/cache.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {

        const dbConfig = configService.get<string>('db');

... (truncated for brevity)