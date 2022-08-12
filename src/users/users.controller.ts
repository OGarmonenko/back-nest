import {Body, Controller, Get, HttpStatus, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schema";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
    constructor(private readonly userService: UsersService) {};

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: HttpStatus.OK, type: [User]})
    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

  /*  @Get(':id')
    findOne(@Param('id') id: string): Promise<Record> {
        return this.recordService.findOne(id);
    }*/
    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: HttpStatus.CREATED, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto): Promise<User> {
        return this.userService.create(userDto);
    }

}
