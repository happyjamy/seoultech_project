import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommonController } from 'src/common/common.controller';
import {
  CreateFreeBoard,
  CreateFreeBoardDto,
  UpdateFreeBoardDto,
} from './dto/create-free-board.dto';
import { FreeBoard } from './entities/free-board.entity';
import { FreeBoardService } from './free-board.service';

@ApiTags('FreeBoard')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('freeboard')
export class FreeBoardController extends CommonController<
  FreeBoard,
  CreateFreeBoardDto,
  UpdateFreeBoardDto,
  CreateFreeBoard
> {
  constructor(private readonly freeBoardService: FreeBoardService) {
    super(freeBoardService);
  }
}
