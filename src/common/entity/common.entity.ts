import { Prop } from '@nestjs/mongoose';

export class Entity {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  authorId: string;
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
