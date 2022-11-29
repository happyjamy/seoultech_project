import { Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
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

  @ApiResponse({ status: 200, type: [CreateCommon] })
  @Get()
  findAll(): Promise<CreateCommon[]> {
    return this.commonService.findAll();
  }

  @ApiResponse({ status: 200, type: CreateCommon })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<CreateCommon> {
    return this.commonService.findOne(id);
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
