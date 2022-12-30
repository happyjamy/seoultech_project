import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UpdateUserPasswordDto {
  @IsString()
  oldPassword: string;
  @IsString()
  newPassword: string;
}
