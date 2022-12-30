import { Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { UserId } from 'src/auth/decorator/user-id.decorator';
import {
  CreateCommon,
  CreateCommonDto,
  UpdateCommonDto,
} from './dto/common.dto';

export class CommonController<
  Entity,
  CreateCommonDto,
  UpdateCommonDto,
  CreateCommon,
> {
  constructor(private commonService: any) {
    this.commonService = commonService;
  }

  @ApiResponse({ status: 201, type: CreateCommon })
  @ApiBody({ type: CreateCommonDto })
  @Post()
  async create(
    @UserId() userId: string,
    @Body() createCommonDto: CreateCommonDto,
  ): Promise<CreateCommon> {
    return await this.commonService.create(createCommonDto, userId);
  }

  @ApiOperation({
    description:
      'title 쿼리로 검색할 제목 키워드를 입력해주세요. 입력하지 않으면 전체 게시글을 반환합니다.',
  })
  @ApiQuery({
    name: 'title',
    required: false,
    description: '검색할 제목 키워드를 입력해주세요',
  })
  @ApiResponse({ status: 200, type: [CreateCommon] })
  @Get()
  findAll(@Query('title') title: string): Promise<CreateCommon[]> {
    if (title) {
      return this.commonService.findAllByKeyword(title);
    }
    return this.commonService.findAll();
  }

  @ApiOperation({
    description:
      '이 요청을 보내면 자동으로 해당 게시글의 viewCount를 1 올려서 전송해 줍니다. 파라미터의 id 는 게시글의 id 입니다',
  })
  @ApiResponse({ status: 200, type: CreateCommon })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<CreateCommon> {
    return this.commonService.findeOneAndviewCountUp(id);
  }

  @ApiResponse({ status: 200, type: CreateCommon })
  @ApiBody({ type: UpdateCommonDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommonDto: UpdateCommonDto,
  ): Promise<CreateCommon> {
    return this.commonService.update(id, updateCommonDto);
  }

  @ApiResponse({ status: 200, type: CreateCommon })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<CreateCommon> {
    return this.commonService.remove(id);
  }
}
