import { ReferenceRepository } from './../reference.repository';
import { CheckCommonGuard } from 'src/common/guards/check-common.guard';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckReferenceGuard extends CheckCommonGuard {
  constructor(private referenceRepository: ReferenceRepository) {
    super(referenceRepository);
  }
}
