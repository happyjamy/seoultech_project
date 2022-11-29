import { Common } from '../../common/entity/common-entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type ReferenceDocument = Reference & Document;

@Schema({
  timestamps: true,
})
export class Reference extends Common {}

export const ReferenceSchema = SchemaFactory.createForClass(Reference);
