import { Entity } from '../../common/entity/common.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type FreeBoardDocument = FreeBoard & Document;

@Schema({
  timestamps: true,
})
export class FreeBoard extends Entity {}

export const FreeBoardSchema = SchemaFactory.createForClass(FreeBoard);
