import {ApiProperty} from "@nestjs/swagger";

export class CreateRecordDto {
   @ApiProperty({example: 'testRecord', description: "item record"})
   readonly item: string;

   @ApiProperty({example: '15/05/2025', description: "date created record"})
   readonly date: string
}