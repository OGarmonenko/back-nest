import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User, UserDocument} from "./schemas/user.schema";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) {}

    async create(dto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create(dto);
        return user;
    }

    async getUserByEmail(email:string): Promise<User> {
        const user = await this.userModel.findOne({email}).exec();
        return user;
    }
}