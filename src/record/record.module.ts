import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import { RecordController } from './record.controller';
import {RecordSchema, Record} from "./schemas/record.schema";
import {RecordService} from "./record.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Record.name, schema: RecordSchema }])],
    controllers: [RecordController],
    providers: [RecordService],
})
export class RecordModule {}