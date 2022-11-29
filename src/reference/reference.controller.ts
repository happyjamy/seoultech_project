import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommonController } from 'src/common/common.controller';
import {
  CreateReferenceDto,
  UpdateReferenceDto,
} from './dto/create-reference.dto';
import { ReferenceService } from './reference.service';

@ApiTags('Reference')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notice')
export class ReferenceController extends CommonController<
  CreateReferenceDto,
  UpdateReferenceDto
> {
  constructor(private readonly referenceService: ReferenceService) {
    super(referenceService);
  }
}
