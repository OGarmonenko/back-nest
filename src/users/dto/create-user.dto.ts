import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'User', description: "Login"})
    readonly login: string;
    @ApiProperty({example: '12', description: "Password"})
    readonly password: string;

}