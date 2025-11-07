import { Module } from '@nestjs/common';
import { ClipService } from './services/clip.service';
import { DomainModule } from 'src/domain/domain.module';
import { ClipMapper } from './mappers/clip.mapper';
import { WebSocketModule } from 'src/websocket/websocket.module';

@Module({
  imports: [
    DomainModule,
    WebSocketModule,
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