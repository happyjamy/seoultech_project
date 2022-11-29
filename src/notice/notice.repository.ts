import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateNotice,
  CreateNoticeDto,
  UpdateNoticeDto,
} from './dto/create-notice.dto';
import { Notice, NoticeDocument } from './entity/notice.entitiy';
import { Model } from 'mongoose';
import { CommonRepository } from 'src/common/common.repository';

@Injectable()
export class NoticeRepository extends CommonRepository<
  Notice,
  CreateNoticeDto,
  UpdateNoticeDto,
  CreateNotice
> {
  constructor(
    @InjectModel(Notice.name) private noticeModel: Model<NoticeDocument>,
  ) {
    super(noticeModel);
  }
}
