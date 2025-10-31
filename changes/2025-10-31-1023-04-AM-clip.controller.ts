import { Body, Controller, Post, Put, Delete, Param, BadRequestException, UseFilters, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiExtraModels } from '@nestjs/swagger';
import { ClipDto, UpdateClipDto } from 'src/application/dtos/clip.dto';
import { ApiOkResponseData, ResponseDto } from 'src/application/dtos/response.dto';
import { ClipService } from 'src/application/services/clip.service';
import { UnknownExceptionFilter } from '../config/exception.filter';
import { BulkClipInteractionsDto } from 'src/application/dtos/clip-interaction.dto';

@ApiTags('Clips')
@ApiExtraModels(
    ClipDto,
    ResponseDto
)
@Controller()
@UseFilters(new UnknownExceptionFilter())
export class ClipController {
    constructor(private readonly clipService: ClipService) { }

    @Post()
    @ApiOperation({ summary: 'Crea un Clip' })
    @ApiOkResponseData(ClipDto)
    @ApiBody({ type: ClipDto })
    async create(@Body() dto: ClipDto): Promise<ResponseDto<ClipDto>> {
        const result = await this.clipService.create(dto);
        return result;
    }

    @Put(":code")
    @ApiOperation({ summary: 'Actualiza un Clip' })
    @ApiOkResponseData(ClipDto)
    @ApiBody({ type: UpdateClipDto })
    async update(@Param("code") code: string, @Body() dto: UpdateClipDto): Promise<ResponseDto<ClipDto>> {
        if (!code) throw new BadRequestException('El code es obligatorio para actualizar');
        const result = await this.clipService.update({ ...dto, code });
        return result;
    }

    @Delete(':code')
    @ApiOperation({ summary: 'Elimina un Clip por su código' })
    @ApiOkResponseData()
    async deleteByCode(@Param('code') code: string): Promise<ResponseDto<void>> {
        const result = this.clipService.deleteByCode(code);
        return result;
    }

    @Patch('interactions/bulk')
    @ApiOperation({ summary: 'Aplica incrementos de interacciones a múltiples clips' })
    @ApiOkResponseData()
    @ApiBody({ type: BulkClipInteractionsDto })
    async applyInteractions(@Body() dto: BulkClipInteractionsDto): Promise<ResponseDto<void>> {
... (truncated for brevity)