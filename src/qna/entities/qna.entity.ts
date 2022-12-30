import { Entity } from '../../common/entity/common.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type QnaDocument = Qna & Document;

@Schema({
  timestamps: true,
})
export class Qna extends Entity {}

export const QnaSchema = SchemaFactory.createForClass(Qna);
