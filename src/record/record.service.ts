import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {CreateRecordDto} from "./dto/create-record.dto";
import {Record, RecordDocument} from './schemas/record.schema'
import {UpdateRecordInfoBlockDto} from "./dto/update-record-info-block.dto";

@Injectable()
export class RecordService {
    constructor(
        @InjectModel(Record.name) private readonly recordModel: Model<RecordDocument>,
    ) {}

    async create(dto: CreateRecordDto): Promise<Record> {
        const createdRecord = await this.recordModel.create(dto);
        return createdRecord;
    }

   async findAll(): Promise<Record[]> {
        const records = await this.recordModel.find().sort({date: -1}).exec();
        return records;
    }

    async findOne(id: number): Promise<Record> {
        const record = await this.recordModel.findOne({  id }).exec();
        return record;
    }

    async update(id: number, dto: UpdateRecordInfoBlockDto) {
        const updatedRecord = await this.recordModel.updateOne({id}, {$set: {userInfo: dto}}).exec();
        if(!updatedRecord.modifiedCount) {
            throw new HttpException('Not update', HttpStatus.FORBIDDEN)
        }
        return updatedRecord;
    }

    async remove (id: string) {
        const deletedRecord = await this.recordModel.findByIdAndRemove({_id: id }).exec();
        return deletedRecord;
    }

}