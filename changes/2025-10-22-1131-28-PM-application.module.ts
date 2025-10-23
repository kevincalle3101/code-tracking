import { Module, forwardRef } from '@nestjs/common';
import { CreateResourceService } from './services/create-resource.service';
import { CreateUserPermissionsService } from './services/create-user-permissions.service';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [forwardRef(() => InfrastructureModule)], // Importa Infra para acceder a los repositorios
  providers: [CreateResourceService, CreateUserPermissionsService],
  exports: [CreateResourceService, CreateUserPermissionsService], // Exporta los casos de uso para que los controladores los usen
})
export class ApplicationModule {}