import { Module } from '@nestjs/common';
import { CreateResourceService } from './services/create-resource.service';
import { CreateUserPermissionService } from './services/create-user-permission.service';
import { DomainModule } from '../domain/domain.module';
import { AdaptersModule } from '../infrastructure/adapters/adapters.module';

@Module({
  imports: [
    DomainModule,
    AdaptersModule,
  ],
  providers: [
    CreateResourceService,
    CreateUserPermissionService,
  ],
  exports: [
    CreateResourceService,
    CreateUserPermissionService,
  ],
})
export class ApplicationModule { }