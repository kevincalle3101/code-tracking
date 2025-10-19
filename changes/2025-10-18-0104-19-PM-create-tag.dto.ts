import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTagDto {
    @IsOptional()
    @IsInt()
    id?: number

    @IsString()
    @IsNotEmpty()
    description: string
}