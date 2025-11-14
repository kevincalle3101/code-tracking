import { Module } from '@nestjs/common';
import { ClipService } from './services/clip.service';
import { DomainModule } from 'src/domain/domain.module';
import { ClipMapper } from './mappers/clip.mapper';

@Module({
  imports: [
    DomainModule
  ],
  providers: [
    ClipService,
    ClipMapper
  ],
  exports: [
    ClipService,
    ClipMapper
  ],
})
export class ApplicationModule { }