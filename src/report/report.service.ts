import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import {
  CreateReport,
  CreateReportDto,
  UpdateReportDto,
} from './dto/create-report.dto';
import { Report } from './entities/report.entity';
import { ReportRepository } from './report.repository';

@Injectable()
export class ReportService extends CommonService<
  Report,
  CreateReportDto,
  UpdateReportDto,
  CreateReport
> {
  constructor(private readonly reportRepository: ReportRepository) {
    super(reportRepository);
  }
}
