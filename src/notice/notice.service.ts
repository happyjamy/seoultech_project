import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import {
  CreateNotice,
  CreateNoticeDto,
  UpdateNoticeDto,
} from './dto/create-notice.dto';
import { Notice } from './entity/notice.entitiy';
import { NoticeRepository } from './notice.repository';

@Injectable()
export class NoticeService extends CommonService<
  Notice,
  CreateNoticeDto,
  UpdateNoticeDto,
  CreateNotice
> {
  constructor(private readonly noticeRepository: NoticeRepository) {
    super(noticeRepository);
  }
}
