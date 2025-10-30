import { Module } from '@nestjs/common';
import { CreatePermissionService } from './services/create-permission.service';

@Module({
  providers: [
    CreatePermissionService,
  ],
  exports: [
    CreatePermissionService,
  ],
})
export class DomainModule { }