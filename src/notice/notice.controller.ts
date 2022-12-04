import { Body, Controller, Delete, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommonController } from 'src/common/common.controller';
import { CreateCommon, UpdateCommonDto } from 'src/common/dto/common.dto';
import {
  CreateNotice,
  CreateNoticeDto,
  UpdateNoticeDto,
} from './dto/create-notice.dto';
import { Notice } from './entity/notice.entitiy';
import { CheckNoticeGuard } from './guard/check-notice.guard';
import { NoticeService } from './notice.service';

@ApiTags('Notice')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notice')
export class NoticeController extends CommonController<
  Notice,
  CreateNoticeDto,
  UpdateNoticeDto,
  CreateNotice
> {
  constructor(private readonly noticeService: NoticeService) {
    super(noticeService);
  }

  @UseGuards(CheckNoticeGuard)
  @ApiResponse({ status: 200, type: CreateCommon })
  @ApiBody({ type: UpdateCommonDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNoticeDto: UpdateNoticeDto,
  ): Promise<CreateNotice> {
    return this.noticeService.update(id, updateNoticeDto);
  }

  @UseGuards(CheckNoticeGuard)
  @ApiResponse({ status: 200, type: CreateCommon })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<CreateNotice> {
    return this.noticeService.remove(id);
  }
}
