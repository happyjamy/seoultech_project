import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommonController } from 'src/common/common.controller';
import { CreateQna, CreateQnaDto, UpdateQnaDto } from './dto/create-qna.dto';
import { Qna } from './entities/qna.entity';
import { QnaService } from './qna.service';

@ApiTags('Qna')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('qna')
export class QnaController extends CommonController<
  Qna,
  CreateQnaDto,
  UpdateQnaDto,
  CreateQna
> {
  constructor(private readonly qnaService: QnaService) {
    super(qnaService);
  }
}
