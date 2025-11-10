import { IsInt, IsNotEmpty, IsOptional, IsString, IsArray, ArrayMinSize, MaxLength, Min, ValidateIf, MinLength } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PartialType } from '@nestjs/swagger';

export class MediaClipDto {
    @IsOptional()
    @IsString()
    @MaxLength(10)
    @ApiPropertyOptional({ description: 'Código del clip (autogenerado al crear, obligatorio para actualizar)', example: '3ec877d5-5713-4406-b555-eb09ab77bad9' })
    code?: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    @ApiProperty({ description: 'ID del usuario', example: 'user_00273' })
    userId: string

    @IsInt()
    @IsOptional()
    // @ApiProperty({ description: 'ID del estado', example: 1 })
    statusId: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'URL del vídeo en baja calidad', example: 'https//[domain]/3ec877d5-5713-4406-b555-eb09ab77bad9/video.m3u8' })
    videoUrl: string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ description: 'Thumbnail', example: 'https//[domain]/3ec877d5-5713-4406-b555-eb09ab77bad9/thumbnail.jpg' })
    thumbnailUrl?: string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ description: 'URL del post', example: 'post_00273' })
    postId?: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    @ApiProperty({ description: 'Clip tittle', type: String, example: 'Departamento de estreno en Jesús María' })
    title: string

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'Clip description', type: String, example: 'Vive con todas las comodidades a la mano, vista al parque' })
    description?: string

    @IsInt()
    @IsOptional()
... (truncated for brevity)