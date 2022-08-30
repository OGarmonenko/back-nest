import {forwardRef, Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import { RecordController } from './record.controller';
import {RecordSchema, Record} from "./schemas/record.schema";
import {RecordService} from "./record.service";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Record.name, schema: RecordSchema }]),
        AuthModule
    ],
    controllers: [RecordController],
    providers: [RecordService],
})
export class RecordModule {}