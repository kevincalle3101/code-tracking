import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTagService } from 'src/application/services/create-tag.service';
import { Tag } from 'src/domain/entities/tag.entity';
import { CreateTagDto } from 'src/application/dtos/create-tag.dto';

@Controller('tag')
export class TagController {
    constructor(private readonly createTagService: CreateTagService) { }

    @Post()
    create(@Body() createTagDto: CreateTagDto) {
        return this.createTagService.execute(createTagDto)
    }

    @Put()
    update(@Body() createTagDto: CreateTagDto) {
        return this.createTagService.execute(createTagDto)
    }

    @Get("/all")
    getAll(): Promise<Tag[]> {
        return this.createTagService.getAll()
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.createTagService.delete(Number(id))
    }
}