import { Controller, Get, Query } from '@nestjs/common';
    import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
    import { CreateMediaClipDto } from 'src/application/dtos/create-media-clip.dto';
    import { CreateMediaClipService } from 'src/application/services/create-media-clip.service';

    @ApiTags('Feed')
    @Controller('feed')
    export class FeedController {
        constructor(
            private readonly createMediaClipService: CreateMediaClipService,
        ) { }

        @Get('list')
        @ApiOperation({ summary: 'Obtiene feed de MediaClips con filtros y paginación infinita' })
        @ApiResponse({
            status: 200,
            description: 'Lista de clips filtrados',
            type: [CreateMediaClipDto],
        })
        async getFeed(
            @Query('tags') tags?: string,
            @Query('year') year?: number,
            @Query('month') month?: number,
            @Query('ubigeo') ubigeo?: string,
            @Query('page') page: number = 1,
            @Query('limit') limit: number = 10
        ): Promise<{ data: Partial<CreateMediaClipDto>[], nextPage: number | null }> {
            const tagIds = tags ? tags.split(',').map((t) => parseInt(t.trim(), 10)) : []

            return this.createMediaClipService.getFeed({
                tagIds,
                year,
                month,
                ubigeo,
                page,
                limit
            })
        }
    }