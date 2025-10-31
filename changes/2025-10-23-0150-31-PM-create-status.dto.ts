import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateStatusDto {
    @IsOptional()
    @IsInt()
    id?: number

    @IsString()
    @IsNotEmpty()
    description: string
}