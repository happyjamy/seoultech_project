import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import { CreateQna, CreateQnaDto, UpdateQnaDto } from './dto/create-qna.dto';
import { Qna } from './entities/qna.entity';
import { QnaRepository } from './qna.repository';

@Injectable()
export class QnaService extends CommonService<
  Qna,
  CreateQnaDto,
  UpdateQnaDto,
  CreateQna
> {
  constructor(private readonly qnaRepository: QnaRepository) {
    super(qnaRepository);
  }
}
