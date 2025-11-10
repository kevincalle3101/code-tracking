import { Injectable } from '@nestjs/common';
import { ListClipsQueryDto } from '../dtos/list-clips.dto';
import { ClipListQuery } from 'src/domain/value-objects/clip-list-query.value-object';
import { MediaClip } from 'src/domain/entities/media-clip.entity';
import { PaginatedResponse } from 'src/domain/value-objects/paginated-response.value-object';
import { PaginatedResponseDto } from '../dtos/paginated-response.dto';
import { MediaClipDto } from '../dtos/media-clip.dto';

@Injectable()
export class ClipMapper {

    public toDomainQuery(query: ListClipsQueryDto): ClipListQuery {
        const tags = query.tags
            ? query.tags.split(',').map((tag) => tag.trim()).filter(Boolean).join(',')
            : undefined;

        return {
            limit: query.limit,
            cursor: query.cursor ?? undefined,
            tags,
            sortBy: query.sortBy ?? '',
            userId: query.userId,
        };
    }

    public toPaginatedResponse(result: PaginatedResponse<MediaClip>): PaginatedResponseDto<MediaClipDto> {
        const response = new PaginatedResponseDto<MediaClipDto>();
        response.data = result.data.map((clip) => this.toDto(clip));
        response.pagination = {
            nextCursor: result.pagination.nextCursor,
            hasMore: result.pagination.hasMore,
        };
        return response;
    }

    public toDto(clip: MediaClip): MediaClipDto {
        const dto = new MediaClipDto();
        Object.assign(dto, clip);
        return dto;
    }

}