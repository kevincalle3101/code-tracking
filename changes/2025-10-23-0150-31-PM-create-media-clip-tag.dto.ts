import { IsInt, IsNotEmpty, IsArray, IsString } from "class-validator";

export class CreateMediaClipTagDto {
    @IsInt()
    @IsNotEmpty()
    clipId: number

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    tags: string[]
}