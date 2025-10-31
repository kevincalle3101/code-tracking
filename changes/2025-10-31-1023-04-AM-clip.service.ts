import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClipDto, ClipSource, UpdateClipDto } from '../dtos/clip.dto';
import { ClipRepository } from 'src/domain/repositories/clip.repository';
import { buildPagination, PaginatedResponseDto } from '../dtos/paginated-response.dto';
import { ListClipsQueryDto } from '../dtos/list-clips.dto';
import { ClipMapper } from '../mappers/clip.mapper';
import { buildSuccess, ResponseDto } from '../dtos/response.dto';
import { OrderStatus } from 'src/shared/enum/order-status';
import { ClipInteractionUpdateDto } from '../dtos/clip-interaction.dto';

@Injectable()
export class ClipService {
    private readonly logger = new Logger(ClipService.name)

    constructor(
        @Inject(ClipRepository)
        private readonly clipRepository: ClipRepository,
        private readonly clipMapper: ClipMapper,
    ) { }

    async create(clipDto: ClipDto): Promise<ResponseDto<ClipDto>> {
        this.logger.log(`Creating clip with code: ${clipDto.code}`)

        try {

            const exist = await this.clipRepository.findByCode(clipDto.code);
            if (exist) throw new Error('Clip already exists with this code');
            const clip = this.clipMapper.toEntity(clipDto);
            const source = clipDto.source ?? ClipSource.MEDIA_EVENT;
            const statusId = clip.statusId ?? OrderStatus.UPLOADING;

            clip.source = source;
            clip.statusId = statusId;

            this.logger.log(`Creating clip entity: ${JSON.stringify(clip)}`);
            const savedClip = await this.clipRepository.createAggregate({
                clip,
                tags: clipDto.tags ?? [],
                auditPayload: { ...clipDto },
            });
            this.logger.log(`Created clip with id: ${savedClip.id}`);

            return buildSuccess(
                'MediaClip registrado correctamente',
                this.clipMapper.toDto(savedClip)
            );
        } catch (error) {
            this.logger.error(`Error al crear MediaClip: ${error.message}`)
            throw error
        }
... (truncated for brevity)