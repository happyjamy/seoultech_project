import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonRepository } from 'src/common/common.repository';
import {
  CreateReport,
  CreateReportDto,
  UpdateReportDto,
} from './dto/create-report.dto';
import { Report, ReportDocument } from './entities/report.entity';

@Injectable()
export class ReportRepository extends CommonRepository<
  Report,
  CreateReportDto,
  UpdateReportDto,
  CreateReport
> {
  constructor(
    @InjectModel(Report.name)
    private readonly reportModel: Model<ReportDocument>,
  ) {
    super(reportModel);
  }
}
