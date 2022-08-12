import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {CreateRecordDto} from "./dto/create-record.dto";
import {RecordService} from "./record.service";
import {Record} from "./schemas/record.schema";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../users/schemas/user.schema";

@ApiTags('Records')
@Controller('api/record')
export class RecordController {
    constructor(private readonly recordService: RecordService) {};

    @ApiOperation({summary: 'Get all records'})
    @ApiResponse({status: HttpStatus.OK, type: [Record]})
    @Get()
    findAll(): Promise<Record[]>{
        return this.recordService.findAll();
    }

    @ApiOperation({summary: 'Get one record'})
    @ApiResponse({status: HttpStatus.OK, type: Record})
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Record> {
        return this.recordService.findOne(id);
    }

    @ApiOperation({summary: 'Create record'})
    @ApiResponse({status: HttpStatus.CREATED, type: Record})
    @Post()
    create(@Body() CreateRecordDto: CreateRecordDto): Promise<Record> {
        return this.recordService.create(CreateRecordDto);
    }

    /*@Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `update`;
    }*/

    @ApiOperation({summary: 'Delete record'})
    @ApiResponse({status: HttpStatus.OK, type: Record})
    @Delete(':id')
    remove(@Param('id') id: string) {

        return this.recordService.remove(id);
    }


}
