import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import {RecordModule} from "./record/record.module";
import {UsersModule} from "./users/users.module";



@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        MongooseModule.forRoot(process.env.MONGO_DB_URL),
        RecordModule,
        UsersModule
    ],
})
export class AppModule {}