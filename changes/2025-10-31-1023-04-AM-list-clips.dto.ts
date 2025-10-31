import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';


export enum SortKeys {
  CREATE_DATE = 'createDate',
  UPDATE_DATE = 'updateDate',
  VIEWS = 'views',
  LIKES = 'likes',
}

export class ListClipsQueryDto {

  @ApiPropertyOptional({
    description: 'Número de resultados por página.',
    default: 20,
    minimum: 1,
    maximum: 100,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number = 20;

  @ApiPropertyOptional({ description: 'Id del último clip de la consulta previa', example: '05StGXR8_Z5jdHi6B-myT' })
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiPropertyOptional({ description: 'Tags para filtrar, separados por coma.', example: 'JESUS_MARIA,PETFRIENDLY,COCHERA' })
  @IsOptional()
  @IsString()
  tags?: string;

  @ApiPropertyOptional({
    description: "Campo para ordenar los resultados.",
    default: 'createDate',
    enum: SortKeys,
  })
  @IsOptional()
  @IsEnum(SortKeys)
  sortBy: SortKeys = SortKeys.CREATE_DATE;

  @ApiPropertyOptional({ description: 'Filtrar por el ID de un usuario.', example: 'user_00273' })
  @IsOptional()
  @IsString()
  userId?: string;
... (truncated for brevity)