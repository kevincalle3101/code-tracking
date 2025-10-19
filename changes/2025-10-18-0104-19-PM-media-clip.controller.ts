import { Body, Controller, Get, Post, Put, Delete, Param, ParseIntPipe, BadRequestException, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiExtraModels, getSchemaPath } from '@nestjs/swagger';
import { CreateMediaClipDto, UpdateMediaClipDto } from 'src/application/dtos/create-media-clip.dto';
import { CreateMediaClipService } from 'src/application/services/create-media-clip.service';

@ApiTags('Media Clips')
@ApiExtraModels(CreateMediaClipDto)
@Controller('media-clip')
export class MediaClipController {
    constructor(private readonly createMediaClipService: CreateMediaClipService) { }

    @Post()
    @ApiOperation({ summary: 'Crea un MediaClip' })
    @ApiResponse({
        status: 201,
        description: 'MediaClip creado',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string', example: 'MediaClip registrado correctamente' },
                data: { $ref: getSchemaPath(CreateMediaClipDto) }
            }
        }
    })

    @ApiBody({ type: CreateMediaClipDto })
    async create(@Body() dto: CreateMediaClipDto): Promise<{ message: string; data: Partial<CreateMediaClipDto> }> {
        const result = await this.createMediaClipService.create(dto)
        return { message: result.message, data: result.data }
    }

    @Put()
    @ApiOperation({ summary: 'Actualiza un MediaClip' })
    @ApiResponse({
        status: 200,
        description: 'MediaClip actualizado',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string', example: 'MediaClip actualizado correctamente' },
                data: { $ref: getSchemaPath(UpdateMediaClipDto) }
            }
        }
    })

    @ApiBody({ type: UpdateMediaClipDto })
    async update(@Body() dto: UpdateMediaClipDto): Promise<{ message: string; data: Partial<UpdateMediaClipDto> }> {
        if (!dto.code) throw new BadRequestException('El code es obligatorio para actualizar')
        const result = await this.createMediaClipService.update(dto)
        return { message: result.message, data: result.data }
... (truncated for brevity)