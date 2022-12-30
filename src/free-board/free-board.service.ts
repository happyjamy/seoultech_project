import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import {
  CreateFreeBoard,
  CreateFreeBoardDto,
  UpdateFreeBoardDto,
} from './dto/create-free-board.dto';
import { FreeBoard } from './entities/free-board.entity';
import { FreeBoardRepository } from './free-board.repository';

@Injectable()
export class FreeBoardService extends CommonService<
  FreeBoard,
  CreateFreeBoardDto,
  UpdateFreeBoardDto,
  CreateFreeBoard
> {
  constructor(private readonly freeBoardRepository: FreeBoardRepository) {
    super(freeBoardRepository);
  }
}
