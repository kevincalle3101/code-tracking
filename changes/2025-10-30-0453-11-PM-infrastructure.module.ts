import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { PermissionController } from './controllers/permission.controller';

@Module({
  imports: [
    ApplicationModule,
  ],
  controllers: [
    PermissionController
  ],
})
export class InfrastructureModule { }