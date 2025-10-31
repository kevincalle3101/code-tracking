import { Module } from '@nestjs/common';
import { PermissionService } from './services/permission.service';
import { PermissionMapper } from './mappers/permission.mapper';
import { AdaptersModule } from '../infrastructure/adapters/adapters.module';

@Module({
  imports: [
    AdaptersModule,
  ],
  providers: [
    PermissionService,
    PermissionMapper,
  ],
  exports: [
    PermissionService,
  ],
})
export class ApplicationModule { }