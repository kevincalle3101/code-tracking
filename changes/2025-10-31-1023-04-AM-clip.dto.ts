import { IsInt, IsNotEmpty, IsOptional, IsString, IsArray, ArrayMinSize, MaxLength, MinLength, Length, IsEnum } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PartialType } from '@nestjs/swagger';

export enum ClipSource {
    APP = 'APP',
    MEDIA_EVENT = 'MEDIA_EVENT',
}

export class ClipDto {
    @IsNotEmpty()
    @IsString()
    @Length(21)
    @ApiProperty({ description: 'Código del clip (autogenerado al crear, obligatorio para actualizar)', example: 'V1StGXR8_Z5jdHi6B-myT' })
    code: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    @ApiProperty({ description: 'ID del usuario', example: 'user_00273' })
    userId: string

    @IsInt()
    @IsOptional()
    @ApiProperty({ description: 'ID del estado', example: 1 })
    statusId: number

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ description: 'URL del vídeo en baja calidad', example: 'http://video_lq' })
    videoUrl?: string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ description: 'ID del post', example: 'post_00273' })
    postId?: string

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