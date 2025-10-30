import { Type, applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath, ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Operación realizada con éxito.' })
  message: string;

  data?: T;

}

export const ApiOkResponseData = <DataDto extends Type<any>>(dataDto?: DataDto | DataDto[]) => {

  if (dataDto) {
    const isArray = Array.isArray(dataDto);
    const dto = isArray ? dataDto[0] : dataDto;

    return applyDecorators(
      ApiOkResponse({
        schema: {
          allOf: [
            { $ref: getSchemaPath(ResponseDto) },
            {
              properties: {
                data: isArray
                  ? { type: 'array', items: { $ref: getSchemaPath(dto) } }
                  : { $ref: getSchemaPath(dto) },
              },
            },
          ],
        },
      }),
    );
  } else {
    return applyDecorators(
      ApiOkResponse({
        schema: {
          $ref: getSchemaPath(ResponseDto),
        },
      }),
    );
  }
};

export function buildSuccess<T>(message: string, data?: T): ResponseDto<T> {
  return {
... (truncated for brevity)