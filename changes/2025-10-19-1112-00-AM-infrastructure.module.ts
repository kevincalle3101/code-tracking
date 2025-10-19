import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RestController } from './controllers/rest.controller';
import { ResourceRepositoryImpl } from './adapters/database/repositories/resource.repository.impl';
import { RESOURCE_REPOSITORY } from '../domain/repositories/resource.repository';
import { ResourceSchema } from './adapters/database/schema/resource.schema';
import { ApplicationModule } from '../application/application.module';
import { S3Adapter } from './adapters/aws/s3.adapter';
import { StatusController } from './controllers/status.controller';
import { StatusSchema } from './adapters/database/schema/status.schema';
import { StatusRepositoryImpl } from './adapters/database/repositories/status.repository.impl';
import { STATUS_REPOSITORY } from 'src/domain/repositories/status.repository';
import { TagSchema } from './adapters/database/schema/tag.schema';
import { TagController } from './controllers/tag.controller';
import { TAG_REPOSITORY } from 'src/domain/repositories/tag.repository';
import { TagRepositoryImpl } from './adapters/database/repositories/tag.repository.impl';
import { AuditSchema } from './adapters/database/schema/audit.schema';
import { MediaClipSchema } from './adapters/database/schema/media-clip.schema';
import { MediaClipTagSchema } from './adapters/database/schema/media-clip-tag.schema';
import { AuditController } from './controllers/audit.controller';
import { MediaClipController } from './controllers/media-clip.controller';
import { MediaClipTagController } from './controllers/media-clip-tag.controller';
import { AUDIT_REPOSITORY } from 'src/domain/repositories/audit.repository';
import { MEDIA_CLIP_REPOSITORY } from 'src/domain/repositories/media-clip.repository';
import { MEDIA_CLIP_TAG_REPOSITORY } from 'src/domain/repositories/media-clip-tag.repository';
import { AuditRepositoryImpl } from './adapters/database/repositories/audit.repository,impl';
import { MediaClipTagRepositoryImpl } from './adapters/database/repositories/media-clip-tag.repository.impl';
import { MediaClipRepositoryImpl } from './adapters/database/repositories/media-clip.repository.impl';
import { FeedController } from './controllers/feed.controller';
import { ProfileSchema } from './adapters/database/schema/profile.schema';
import { RoleSchema } from './adapters/database/schema/role.schema';
import { PermissionSchema } from './adapters/database/schema/permission.schema';
import { UserSchema } from './adapters/database/schema/user.schema';
import { PROFILE_REPOSITORY } from 'src/domain/repositories/profile.repository';
import { ROLE_REPOSITORY } from 'src/domain/repositories/role.repository';
import { PERMISSION_REPOSITORY } from 'src/domain/repositories/permission.repository';
import { USER_REPOSITORY } from 'src/domain/repositories/user.repository';
import { ProfileRepositoryImpl } from './adapters/database/repositories/profile.repository.impl';
import { RoleRepositoryImpl } from './adapters/database/repositories/role.repository.impl';
import { PermissionRepositoryImpl } from './adapters/database/repositories/permission.repository.impl';
import { UserRepositoryImpl } from './adapters/database/repositories/user.repository.impl';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {

... (truncated for brevity)