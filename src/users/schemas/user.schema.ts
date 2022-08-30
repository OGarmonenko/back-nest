import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type UserDocument = User & Document;

const ROLES = ['Admin', 'Guest'];

@Schema({ versionKey: false})
export class User {
    @ApiProperty({example: 'User', description: "Login"})
    @Prop({required : true})
    login: string;

    @ApiProperty({example: 'intexsoft@intexsoft.by', description: "Email"})
    @Prop({required : true})
    email: string;

    @ApiProperty({example: '12', description: "Password"})
    @Prop({required : true})
    password: string;

    @ApiProperty({example: 'Admin', enum: ['Admin', 'Guest'], description: "User role"})
    @Prop({default : 'Guest'/*, enum: ROLES*/})
    roles: string[];

}

export const UserSchema = SchemaFactory.createForClass(User);