import { Module } from '@nestjs/common';
import { QnaService } from './qna.service';
import { QnaController } from './qna.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Qna, QnaSchema } from './entities/qna.entity';
import { QnaRepository } from './qna.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Qna.name,
        schema: QnaSchema,
      },
    ]),
  ],
  controllers: [QnaController],
  providers: [QnaService, QnaRepository],
  exports: [QnaService, QnaRepository],
})
export class QnaModule {}
