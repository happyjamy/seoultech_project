import { NoticeRepository } from './../notice.repository';
import { CheckCommonGuard } from 'src/common/guards/check-common.guard';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckNoticeGuard extends CheckCommonGuard {
  constructor(private noticeRepository: NoticeRepository) {
    super(noticeRepository);
  }
}
