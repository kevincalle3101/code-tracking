import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

export class PaginationDto {
  @ApiProperty({
    description: 'El cursor para obtener la siguiente página de resultados. Será null si no hay más.',
    example: 'f9g8h7i6-j5k4...',
    nullable: true,
  })
  nextCursor: string | null;

  @ApiProperty({
    description: 'Indica si hay más resultados por cargar.',
    example: true,
  })
  hasMore: boolean;
}


export class PaginatedResponseDto<T> {

  data: T[];

  @ApiProperty({ type: () => PaginationDto })
  pagination: PaginationDto;
}


export function Paginated<T extends Type<any>>(classRef: T): Type<PaginatedResponseDto<T>> {

  class PaginatedType extends OmitType(PaginatedResponseDto, ['data'] as const) {
    @ApiProperty({ isArray: true, type: classRef }) // <-- La clave
    data: T[];
  }
  Object.defineProperty(PaginatedType, 'name', {
    value: `Paginated${classRef.name}`,
  });

  return PaginatedType;
}