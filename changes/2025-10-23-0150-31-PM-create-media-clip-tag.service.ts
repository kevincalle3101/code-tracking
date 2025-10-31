import { Inject, Injectable, Logger } from '@nestjs/common';
import { MediaClipTag } from 'src/domain/entities/media-clip-tag.entity';
import { MediaClipTagRegistrationService } from 'src/domain/services/create-media-clip-tag.service';
import { CreateMediaClipTagDto } from '../dtos/create-media-clip-tag.dto';
import { DataSource } from 'typeorm';
import { MEDIA_CLIP_TAG_REPOSITORY } from 'src/domain/repositories/media-clip-tag.repository';
import type { MediaClipTagRepository } from 'src/domain/repositories/media-clip-tag.repository';
import { TAG_REPOSITORY } from 'src/domain/repositories/tag.repository';
import type { TagRepository } from 'src/domain/repositories/tag.repository';
import { TagRegistrationService } from 'src/domain/services/create-tag.service';

@Injectable()
export class CreateMediaClipTagService {
    private readonly logger = new Logger(CreateMediaClipTagService.name)
    private readonly registrationService: MediaClipTagRegistrationService

    constructor(
        private readonly dataSource: DataSource,
        @Inject(MEDIA_CLIP_TAG_REPOSITORY)
        private readonly mediaClipTagRepository: MediaClipTagRepository,
        @Inject(TAG_REPOSITORY)
        private readonly tagRepository: TagRepository
    ) {
        const tagRegistrationService = new TagRegistrationService(
            this.tagRepository,
            this.dataSource
        )

        this.registrationService = new MediaClipTagRegistrationService(
            this.mediaClipTagRepository,
            this.tagRepository,
            tagRegistrationService
        )
    }

    async execute(createMediaClipTagDto: CreateMediaClipTagDto): Promise<void> {
        this.logger.log(`Intentando crear MediaClipTag: ${createMediaClipTagDto.clipId} - ${createMediaClipTagDto.tags}`)
        try {
            if (createMediaClipTagDto.tags.length > 0) {
                await this.registrationService.register(
                    createMediaClipTagDto.clipId,
                    createMediaClipTagDto.tags,
                    this.dataSource.manager
                )
                this.logger.log(`MediaClipTag creado: ${createMediaClipTagDto.clipId} - ${createMediaClipTagDto.tags}`)
            }
        } catch (error) {
            this.logger.error(`Error al crear MediaClipTags: ${error.message}`)
            throw error
        }
... (truncated for brevity)