import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";
import {InformationSchema} from "./information.schema";

export type RecordDocument = Record & Document;

@Schema({ versionKey: false})
export class Record {
    @Prop({required : true})
    id: number;

    @ApiProperty({example: 'testRecord', description: "item record"})
    @Prop({required : true})
    item: string;

    @ApiProperty({example: '15/05/2025', description: "date created record"})
    @Prop({required : true})
    date: string;

    @Prop({required : true, default: {}})
    userInfo: InformationSchema
}

export const RecordSchema = SchemaFactory.createForClass(Record);