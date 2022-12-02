import { Prop } from '@nestjs/mongoose';
import { Schema, Types } from 'mongoose';
import { CreateUser } from 'src/user/dto/create-user.dto';

export class Entity {
  @Prop({ required: true, auto: true, type: Schema.Types.ObjectId })
  _id: Types.ObjectId;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true, type : Schema.Types.ObjectId , ref : 'User' })
  author: CreateUser;
  @Prop({ required: true })
  content: string;
  @Prop({ required: true })
  imageUrl: string[];
  @Prop({ required: false })
  createdAt: Date;
  @Prop({ required: false })
  updatedAt: Date;
  @Prop({ required: false })
  viewCount: number;
}
