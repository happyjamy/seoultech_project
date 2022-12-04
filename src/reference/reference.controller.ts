import { CheckReferenceGuard } from './guards/check-reference.guard';
import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommonController } from 'src/common/common.controller';
import {
  CreateReference,
  CreateReferenceDto,
  UpdateReferenceDto,
} from './dto/create-reference.dto';
import { Reference } from './entity/reference.entitiy';
import { ReferenceService } from './reference.service';

@ApiTags('Reference')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('reference')
export class ReferenceController extends CommonController<
  Reference,
  CreateReferenceDto,
  UpdateReferenceDto,
  CreateReference
> {
  constructor(private readonly referenceService: ReferenceService) {
    super(referenceService);
  }
}
