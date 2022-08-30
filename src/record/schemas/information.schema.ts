import { Prop, Schema } from '@nestjs/mongoose';
import {ApiProperty} from "@nestjs/swagger";


@Schema({ versionKey: false})
export class InformationSchema {
    @ApiProperty({example: 'Ivan', description: "Name information"})
    @Prop()
    name: string;

    @ApiProperty({example: 'Ivanov', description: "Surname information"})
    @Prop()
    surname: string;

    @ApiProperty({example: 'Ivanovich', description: "Lastname information"})
    @Prop()
    lastname: string;

    @ApiProperty({example: '15/05/2025', description: "Birthday information"})
    @Prop()
    birthday: string;

    @ApiProperty({example: 'Minsk', description: "Locality information"})
    @Prop()
    locality: string;

    @ApiProperty({example: 'ul.Gorkogo, 1', description: "Address information"})
    @Prop()
    address: string;

    @ApiProperty({example: '+375291112233', description: "Phone information"})
    @Prop()
    phone: string;

    @ApiProperty({example: 'intexsoft@intexsoft.by', description: "Email information"})
    @Prop()
    email: string;
}
