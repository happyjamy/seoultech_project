import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonRepository } from 'src/common/common.repository';
import {
  CreateFreeBoard,
  CreateFreeBoardDto,
  UpdateFreeBoardDto,
} from './dto/create-free-board.dto';
import { FreeBoard, FreeBoardDocument } from './entities/free-board.entity';

@Injectable()
export class FreeBoardRepository extends CommonRepository<
  FreeBoard,
  CreateFreeBoardDto,
  UpdateFreeBoardDto,
  CreateFreeBoard
> {
  constructor(
    @InjectModel(FreeBoard.name)
    private readonly freeBoardModel: Model<FreeBoardDocument>,
  ) {
    super(freeBoardModel);
  }
}
