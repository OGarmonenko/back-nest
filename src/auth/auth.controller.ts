import {Body, Controller, Post, UsePipes} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {AuthUserDto} from "../users/dto/auth-user.dto";
import {CustomValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Auth')
@UsePipes(CustomValidationPipe)
@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post ('/login')
    login(@Body() userDto: AuthUserDto) {
        return this.authService.login(userDto)
    }

    @Post ('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }
}
