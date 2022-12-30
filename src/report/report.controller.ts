import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommonController } from 'src/common/common.controller';
import {
  CreateReport,
  CreateReportDto,
  UpdateReportDto,
} from './dto/create-report.dto';
import { Report } from './entities/report.entity';
import { ReportService } from './report.service';

@ApiTags('Report')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('report')
export class ReportController extends CommonController<
  Report,
  CreateReportDto,
  UpdateReportDto,
  CreateReport
> {
  constructor(private readonly reportService: ReportService) {
    super(reportService);
  }
}
