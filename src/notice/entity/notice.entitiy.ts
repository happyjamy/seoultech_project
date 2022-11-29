import { Entity } from '../../common/entity/common.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type NoticeDocument = Notice & Document;

@Schema({
  timestamps: true,
})
export class Notice extends Entity {}

export const NoticeSchema = SchemaFactory.createForClass(Notice);
