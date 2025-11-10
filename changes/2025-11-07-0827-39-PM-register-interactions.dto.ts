import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsEnum, IsInt, IsOptional, IsPositive, IsString, MaxLength, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ClipInteractionType } from 'src/domain/value-objects/clip-interaction.value-object';

export class ClipInteractionEventDto {
  @ApiProperty({ description: 'Identificador del clip', example: 'abc123' })
  @IsString()
  @MaxLength(64)
  clipId: string;

  @ApiProperty({ description: 'Tipo de interacción', enum: ClipInteractionType, example: ClipInteractionType.VIEW })
  @IsEnum(ClipInteractionType)
  type: ClipInteractionType;

  @ApiPropertyOptional({ description: 'Cantidad de interacciones a sumar', example: 1, default: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  count?: number = 1;

  @ApiPropertyOptional({ description: 'Marca de tiempo del evento en milisegundos', example: Date.now(), default: Date.now() })
  @IsOptional()
  @IsInt()
  @IsPositive()
  occurredAt?: number = Date.now();
}

export class RegisterClipInteractionsDto {
  @ApiProperty({ type: [ClipInteractionEventDto], description: 'Listado de interacciones capturadas' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClipInteractionEventDto)
  interactions: ClipInteractionEventDto[];
}

export class ClipInteractionProcessingResultDto {
  @ApiProperty({ description: 'Eventos recibidos', example: 15 })
  received: number;

  @ApiProperty({ description: 'Clips enviados a actualización inmediata', example: 4 })
  flushedClips: number;

  @ApiProperty({ description: 'Clips que permanecen en buffer', example: 10 })
  bufferedClips: number;
}