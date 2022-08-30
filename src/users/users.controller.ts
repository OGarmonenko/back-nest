import {Body, Controller, Get, HttpStatus, Post, UseGuards, UsePipes} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schema";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CustomValidationPipe} from "../pipes/validation.pipe";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
    constructor(private readonly userService: UsersService) {};

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: HttpStatus.CREATED, type: User})
    @UsePipes(CustomValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto): Promise<User> {
        return this.userService.create(userDto);
    }

}
