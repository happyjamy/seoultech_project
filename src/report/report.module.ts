import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { ReportRepository } from './report.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportSchema } from './entities/report.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Report.name,
        schema: ReportSchema,
      },
    ]),
  ],
  controllers: [ReportController],
  providers: [ReportService, ReportRepository],
  exports: [ReportService, ReportRepository],
})
export class ReportModule {}
