import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsOptional, IsString} from "class-validator";

export class UpdateRecordInfoBlockDto {
    @ApiProperty({example: 'Ivan', description: "Name information"})
    @IsOptional()
    @IsString()
    readonly name?: string

    @ApiProperty({example: 'Ivanov', description: "Surname information"})
    @IsOptional()
    @IsString()
    readonly surname?: string

    @ApiProperty({example: 'Ivanovich', description: "Lastname information"})
    @IsOptional()
    @IsString()
    readonly lastname?: string

    @ApiProperty({example: '15/05/2025', description: "Birthday information"})
    @IsOptional()
    @IsString()
    readonly birthday?: string

    @ApiProperty({example: 'Minsk', description: "Locality information"})
    @IsOptional()
    @IsString()
    readonly locality?: string

    @ApiProperty({example: '+375291112233', description: "Phone information"})
    @IsOptional()
    @IsString()
    readonly phone?: string

    @ApiProperty({example: 'intexsoft@intexsoft.by', description: "Email information"})
    @IsOptional()
    @IsEmail()
    readonly email?: string
}
