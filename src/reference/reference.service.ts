import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import {
  CreateReference,
  CreateReferenceDto,
  UpdateReferenceDto,
} from './dto/create-reference.dto';
import { Reference } from './entity/reference.entitiy';
import { ReferenceRepository } from './reference.repository';

@Injectable()
export class ReferenceService extends CommonService<
  Reference,
  CreateReferenceDto,
  UpdateReferenceDto,
  CreateReference
> {
  constructor(private readonly referenceRepository: ReferenceRepository) {
    super(referenceRepository);
  }
}
