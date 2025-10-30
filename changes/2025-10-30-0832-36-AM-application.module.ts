import { Module } from '@nestjs/common';
import { PermissionService } from './services/permission.service';
import { DomainModule } from '../domain/domain.module';
import { AdaptersModule } from '../infrastructure/adapters/adapters.module';

@Module({
  imports: [
    DomainModule,
    AdaptersModule,
  ],
  providers: [
    PermissionService,
  ],
  exports: [
    PermissionService,
  ],
})
export class ApplicationModule { }