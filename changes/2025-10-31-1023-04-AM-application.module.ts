import { forwardRef, Module } from '@nestjs/common';
import { TagService } from './services/tag.service';
import { ClipService } from './services/clip.service';
import { DomainModule } from 'src/domain/domain.module';
import { AdaptersModule } from 'src/infrastructure/adapters/adapters.module';
import { ClipMapper } from './mappers/clip.mapper';
@Module({
  imports: [
    DomainModule,
    AdaptersModule,
  ],
  providers: [
    TagService,
    ClipService,
    ClipMapper
  ],
  exports: [
    TagService,
    ClipService,
    ClipMapper
  ]
})
export class ApplicationModule { }