import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonRepository } from 'src/common/common.repository';
import { CreateQna, CreateQnaDto, UpdateQnaDto } from './dto/create-qna.dto';
import { Qna, QnaDocument } from './entities/qna.entity';

@Injectable()
export class QnaRepository extends CommonRepository<
  Qna,
  CreateQnaDto,
  UpdateQnaDto,
  CreateQna
> {
  constructor(
    @InjectModel(Qna.name)
    private readonly qnaModel: Model<QnaDocument>,
  ) {
    super(qnaModel);
  }
}
