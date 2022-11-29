import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reference, ReferenceSchema } from './entity/reference.entitiy';
import { ReferenceController } from './reference.controller';
import { ReferenceRepository } from './reference.repository';
import { ReferenceService } from './reference.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Reference.name,
        schema: ReferenceSchema,
      },
    ]),
  ],
  controllers: [ReferenceController],
  providers: [ReferenceService, ReferenceRepository],
})
export default class ReferenceModule {}
