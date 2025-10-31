import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateAuditDto {
    @IsOptional()
    @IsInt()
    id?: number

    @IsInt()
    @IsNotEmpty()
    clipId: number

    @IsInt()
    @IsNotEmpty()
    statusId: number

    @IsString()
    @IsNotEmpty()
    body: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    source: string
}