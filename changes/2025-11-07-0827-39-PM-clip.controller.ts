import { Body, Controller, Get, Post, Logger, Param, Query, UseFilters } from '@nestjs/common';
import { ClipService } from 'src/application/services/clip.service';
import { FileDto, StartUploadIn, StartUploadOut } from 'src/application/dtos/start-upload.dto';
import { ApiOkResponseData, ResponseDto } from 'src/application/dtos/response.dto';
import { Paginated, PaginatedResponseDto } from 'src/application/dtos/paginated-response.dto';
import { MediaClipDto, PartialMediaClipDto } from 'src/application/dtos/media-clip.dto';
import { ApiBody, ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListClipsQueryDto } from 'src/application/dtos/list-clips.dto';
import { UnknownExceptionFilter } from '../config/exception.filter';
import { ClipInteractionProcessingResultDto, RegisterClipInteractionsDto } from 'src/application/dtos/register-interactions.dto';

@ApiTags('Clip')
@Controller('clip')
@ApiExtraModels(
  ResponseDto,
  StartUploadOut,
  MediaClipDto,
  ClipInteractionProcessingResultDto,
)
@UseFilters(new UnknownExceptionFilter())
export class ClipController {
  private readonly logger = new Logger(ClipController.name);
  constructor(private readonly clipService: ClipService) { }

  @Post("upload-start")
  @ApiOperation({ summary: 'Genera url presign S3 y crear el clip' })
  @ApiOkResponseData(StartUploadOut)
  @ApiBody({ type: StartUploadIn })
  startUpload(@Body() startUploadIn: StartUploadIn): Promise<ResponseDto<StartUploadOut | String>> {
    this.logger.log(`[START] /clip/upload-start body: ${JSON.stringify(startUploadIn)}`);
    return this.clipService.generatePreSignUrl(startUploadIn);
  }

  @Post("upload-end/:clipId")
  @ApiOperation({ summary: 'Confirma subida del archivo' })
  @ApiOkResponseData()
  endUpload(@Param("clipId") clipId: string): Promise<ResponseDto<PartialMediaClipDto | String>> {
    this.logger.log(`[START] /clip/upload-end/${clipId}`);
    return this.clipService.confirmUpload(clipId);
  }

  @Get("list")
  @ApiOperation({ summary: 'Obtiene feed de clips con filtros y scroll infinito' })
  @ApiResponse({
    status: 200,
    description: 'Lista paginada de clips.',
    type: Paginated(MediaClipDto),
  })
  list(@Query() query: ListClipsQueryDto): Promise<PaginatedResponseDto<MediaClipDto>> {
    this.logger.log(`[START] /clip/list ${query}`);
... (truncated for brevity)