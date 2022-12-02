import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { CreateUser } from 'src/user/dto/create-user.dto';

export class CreateCommonDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsString({ each: true })
  @IsNotEmpty()
  imageUrl: string[];
}

export class UpdateCommonDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsString({ each: true })
  @IsNotEmpty()
  imageUrl: string[];
}

export class CreateCommon {
  @ApiProperty()
  _id: Types.ObjectId;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  imageUrl: string[];
  @ApiProperty()
  author: CreateUser;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  viewCount: number;
}
