import { Entity } from '../../common/entity/common.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type ReferenceDocument = Reference & Document;

@Schema({
  timestamps: true,
})
export class Reference extends Entity {}

export const ReferenceSchema = SchemaFactory.createForClass(Reference);
