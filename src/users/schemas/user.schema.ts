import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type UserDocument = User & Document;

@Schema({ versionKey: false})
export class User {
    @ApiProperty({example: 'User', description: "Login"})
    @Prop({required : true})
    login: string;

    @ApiProperty({example: '12', description: "Password"})
    @Prop({required : true})
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);