import {AuthUserDto} from "../users/dto/auth-user.dto";

const bcrypt = require('bcryptjs');
import { HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor (private usersService: UsersService,
                 private jwtService: JwtService){
    }

    async login(userDto: AuthUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.usersService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException('User with specified email address exists', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, process.env.salt || 3);
        const user = await this.usersService.create({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user) {
        const payload = { id: user._id, login: user.login, roles: user.roles}
        return {
            token: this.jwtService.sign(payload),
            user: payload
        }

    }

    private async validateUser(userDto: AuthUserDto) {
        const user = await this.usersService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: `Email or password isn't correct`})
    }}

