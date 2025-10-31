import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsOptional, IsString, MaxLength, ValidateNested, Min } from 'class-validator';

export class ClipInteractionUpdateDto {
    @ApiProperty({ description: 'Código del clip', example: 'abc123' })
    @IsString()
    @MaxLength(64)
    clipCode: string;

    @ApiProperty({ description: 'Incremento de vistas', example: 5, required: false })
    @IsOptional()
    @IsInt()
    @Min(0)
    viewsIncrement?: number;

    @ApiProperty({ description: 'Incremento de likes', example: 2, required: false })
    @IsOptional()
    @IsInt()
    @Min(0)
    likesIncrement?: number;
}

export class BulkClipInteractionsDto {
    @ApiProperty({ type: [ClipInteractionUpdateDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClipInteractionUpdateDto)
    interactions: ClipInteractionUpdateDto[];
}