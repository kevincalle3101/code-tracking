import { ArrayMinSize, IsArray, IsIn, IsNotEmpty, IsOptional, IsString, Length, Matches, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from 'class-transformer';

export const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'video/mp4',
  'video/quicktime',
];

export class FileDto {

  @IsString()
  @IsNotEmpty()
  @IsIn(ALLOWED_MIME_TYPES, {
    message: `El tipo de archivo no es válido. Los tipos permitidos son: ${ALLOWED_MIME_TYPES.join(', ')}`,
  })
  @Matches(/^[\w-]+\/[\w\.-]+$/, {
    message: 'El Content-Type tiene un formato inválido.',
  })
  @ApiProperty({ description: 'File content-type code', type: String, example: 'video/quicktime' })
  contentType: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 255, { // Define una longitud mínima y máxima razonable
    message: 'El nombre del archivo debe tener entre 3 y 255 caracteres.',
  })
  @Matches(/^[\w\s-]+\.[A-Za-z0-9]+$/, {
    message: 'El nombre del archivo contiene caracteres no válidos. Solo se permiten letras, números, espacios, guiones y un punto para la extensión.',
  })
  @ApiProperty({ description: 'File name (including extension)', type: String, example: 'primer-reel.mp4' })
  fileName: string;

}

export class StartUploadIn {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Clip title', type: String, example: 'Departamento de estreno en Jesús María' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Clip description', type: String, example: 'Vive con todas las comodidades a la mano, vista al parque' })
  description: string;

  @IsString()
... (truncated for brevity)