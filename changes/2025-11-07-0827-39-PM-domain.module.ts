import { Module } from '@nestjs/common';
import { MediaProcessingPort } from './ports/media-processing.port';
import { StoragePort } from './ports/storage.port';
import { VideoMetadataPort } from './ports/video-metadata.port';
import { MediaClipPort } from './ports/media-clip.port';
// import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [
    // InfrastructureModule
    // Importar otros módulos si es necesario
  ],
  providers: [
    // MediaProcessingPort,
    // StoragePort,
    // VideoMetadataPort,
    // MediaClipPort,
    // 1. Proveer la Fábrica y otros Domain Services
    // 2. Proveer todas las implementaciones de la Estrategia
    // Todas usan el mismo 'provide' token
  ],
  exports: [
    // MediaProcessingPort,
    // StoragePort,
    // VideoMetadataPort,
    // MediaClipPort,
    // 3. Exportar los servicios que Application necesita
  ],
})
export class DomainModule { }