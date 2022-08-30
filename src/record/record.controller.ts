import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseGuards} from '@nestjs/common';
import {CreateRecordDto} from "./dto/create-record.dto";
import {RecordService} from "./record.service";
import {Record} from "./schemas/record.schema";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Roles} from "../auth/decorators/roles.decorator";
import {rolesTypes} from "../users/enums/roles_types.enum";
import {RolesGuard} from "../auth/guards/roles.guard";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@ApiTags('Records')
@UseGuards(JwtAuthGuard)
@Controller('api/record/')
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
    findOne(@Param('id') id: number): Promise<Record> {
        return this.recordService.findOne(id);
    }

    @ApiOperation({summary: 'Create record'})
    @ApiResponse({status: HttpStatus.CREATED, type: Record})
    @Roles(rolesTypes.Admin, rolesTypes.Guest)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateRecordDto): Promise<Record> {
        return this.recordService.create(dto);
    }

    @ApiOperation({summary: 'Update information from record'})
    @ApiResponse({status: HttpStatus.OK})
    @Roles(rolesTypes.Admin)
    @UseGuards(RolesGuard)
    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateRecordDto) {
        return this.recordService.update(id, dto.userInfo);
    }

    @ApiOperation({summary: 'Delete record'})
    @ApiResponse({status: HttpStatus.OK, type: Record})
    @Roles(rolesTypes.Admin)
    @UseGuards(RolesGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.recordService.remove(id);
    }
}
