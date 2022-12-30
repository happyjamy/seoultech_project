import { Entity } from '../../common/entity/common.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type ReportDocument = Report & Document;

@Schema({
  timestamps: true,
})
export class Report extends Entity {}

export const ReportSchema = SchemaFactory.createForClass(Report);
