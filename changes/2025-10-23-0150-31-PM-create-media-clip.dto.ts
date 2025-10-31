import { IsInt, IsNotEmpty, IsOptional, IsString, IsArray, ArrayMinSize, MaxLength, Min, ValidateIf, MinLength } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PartialType } from '@nestjs/swagger';

export class CreateMediaClipDto {
    @IsOptional()
    @IsString()
    @MaxLength(10)
    @ApiPropertyOptional({ description: 'Código del clip (autogenerado al crear, obligatorio para actualizar)', example: 'aPo5NN_Pbk' })
    code?: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    @ApiProperty({ description: 'ID del usuario', example: 'codigoUsuario' })
    userId: string

    @IsInt()
    @IsOptional()
    @ApiProperty({ description: 'ID del estado', example: 1 })
    statusId: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'URL del vídeo en baja calidad', example: 'http://video_lq' })
    videoUrlLq: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'URL del vídeo en alta calidad', example: 'http://video_hq' })
    videoUrlHq: string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ description: 'URL del post', example: 'http://publicacion' })
    postUrl?: string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ description: 'Thumbnail', example: 'http://thumb.jpg' })
    thumbnailUrl?: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    @ApiProperty({ description: 'Título del clip', example: 'Título de MediaClip' })
    title: string

    @IsString()
    @IsOptional()
... (truncated for brevity)