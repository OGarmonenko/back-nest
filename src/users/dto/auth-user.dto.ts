import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator";

export class AuthUserDto {

    @ApiProperty({example: 'intexsoft@intexsoft.by', description: "Email"})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: '12', description: "Password"})
    @IsString()
    @Length(6,10, {message: "Value password must be between 6 and 10 symbols"})
    readonly password: string;

}