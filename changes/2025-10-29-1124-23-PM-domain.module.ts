import { Module } from '@nestjs/common';
import { UserPermissionService } from './services/create-user-permission.service';

@Module({
  providers: [
    UserPermissionService,
  ],
  exports: [
    UserPermissionService,
  ],
})
export class DomainModule { }