import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMediaClipTagDto } from 'src/application/dtos/create-media-clip-tag.dto';
import { CreateMediaClipTagService } from 'src/application/services/create-media-clip-tag.service';
import { MediaClipTag } from 'src/domain/entities/media-clip-tag.entity';

@Controller('media-clip-tag')
export class MediaClipTagController {
    constructor(private readonly createMediaClipTagService: CreateMediaClipTagService) { }

    @Post()
    create(@Body() createMediaClipTagDto: CreateMediaClipTagDto): Promise<void> {
        return this.createMediaClipTagService.execute(createMediaClipTagDto)
    }

    @Get('/all')
    getAll(): Promise<MediaClipTag[]> {
        return this.createMediaClipTagService.getAll()
    }
}