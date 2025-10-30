import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { RestController } from './controllers/rest.controller';
import { PermissionController } from './controllers/permission.controller';

@Module({
  imports: [
    ApplicationModule,
  ],
  controllers: [
    RestController,
    PermissionController
  ],
})
export class InfrastructureModule { }