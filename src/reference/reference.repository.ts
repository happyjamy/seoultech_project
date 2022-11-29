import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonRepository } from 'src/common/common.repository';
import {
  CreateReference,
  CreateReferenceDto,
  UpdateReferenceDto,
} from './dto/create-reference.dto';
import { Reference, ReferenceDocument } from './entity/reference.entitiy';

@Injectable()
export class ReferenceRepository extends CommonRepository<
  Reference,
  CreateReferenceDto,
  UpdateReferenceDto,
  CreateReference
> {
  constructor(
    @InjectModel(Reference.name) private noticeModel: Model<ReferenceDocument>,
  ) {
    super(noticeModel);
  }
}
