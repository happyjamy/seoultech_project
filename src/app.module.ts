import { FreeBoardModule } from './free-board/free-board.module';
import { ReportModule } from './report/report.module';
import { QnaModule } from './qna/qna.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NoticeModule } from './notice/notice.module';
import ReferenceModule from './reference/reference.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.develop',
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    NoticeModule,
    ReferenceModule,
    QnaModule,
    ReportModule,
    FreeBoardModule,
  ],
})
export class AppModule {}
