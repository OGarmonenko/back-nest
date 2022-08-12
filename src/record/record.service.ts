import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {CreateRecordDto} from "./dto/create-record.dto";
import {Record, RecordDocument} from './schemas/record.schema'

@Injectable()
export class RecordService {
    constructor(
        @InjectModel(Record.name) private readonly recordModel: Model<RecordDocument>,
    ) {}

    async create(createRecordDto: CreateRecordDto): Promise<Record> {
        const createdRecord = await this.recordModel.create(createRecordDto);
        return createdRecord;
    }

   async findAll(): Promise<Record[]> {
        return this.recordModel.find().sort({date: -1}).exec();
    }

   /* async findOne(id: number): Promise<Record> {
        return this.recordModel.findOne({  id }).exec();
    }*/

    async remove (id: string) {
        const deletedRecord = await this.recordModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedRecord;
    }

    findOne(id: string) {
        return Promise.resolve(undefined);
    }
}