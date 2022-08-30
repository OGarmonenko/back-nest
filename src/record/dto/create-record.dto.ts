import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsObject, IsString} from "class-validator";

export class CreateRecordDto {
   @ApiProperty({example: 'testRecord', description: "item record"})
   @IsNotEmpty()
   @IsString()
   readonly item: string;

   @ApiProperty({example: '15/05/2025', description: "date created record"})
   @IsNotEmpty()
   @IsString()
   readonly date: string

   @IsObject()
   readonly userInfo: object;
}