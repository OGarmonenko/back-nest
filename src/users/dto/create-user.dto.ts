import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length} from "class-validator";
import {rolesTypes} from "../enums/roles_types.enum";

export class CreateUserDto {
    @ApiProperty({example: 'User', description: "Login"})
    @IsNotEmpty()
    readonly login: string;

    @ApiProperty({example: 'intexsoft@intexsoft.by', description: "Email"})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: '12', description: "Password"})
    @IsString()
    @Length(6,10, {message: "Value password must be between 6 and 10 symbols"})
    readonly password: string;

    @ApiProperty({example: 'Admin', enum: ['Admin', 'Guest'], description: "User role"})
    @IsEnum(rolesTypes)
    @IsOptional()
    @IsNotEmpty()
    readonly roles?: string[];
}