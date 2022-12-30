import { Module } from '@nestjs/common';
import { FreeBoardService } from './free-board.service';
import { FreeBoardController } from './free-board.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FreeBoard, FreeBoardSchema } from './entities/free-board.entity';
import { FreeBoardRepository } from './free-board.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FreeBoard.name,
        schema: FreeBoardSchema,
      },
    ]),
  ],
  controllers: [FreeBoardController],
  providers: [FreeBoardService, FreeBoardRepository],
  exports: [FreeBoardService, FreeBoardRepository],
})
export class FreeBoardModule {}
