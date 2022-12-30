import {
  BadRequestException,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto, CreateUserResponse } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserPasswordDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserResponse> {
    const existedUser = await this.userRepository.findByEmail(
      createUserDto.email,
    );
    if (existedUser) {
      throw new BadRequestException();
    }
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      parseInt(this.configService.get('HASHING_SALT_OF_ROUND')),
    );
    const user = await this.userRepository.create(createUserDto);
    const token = await this.authService.login(user);
    return {
      user,
      token,
    };
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        parseInt(this.configService.get('HASHING_SALT_OF_ROUND')),
      );
    }
    return this.userRepository.update(id, updateUserDto);
  }

  async updatePassword(
    id: string,
    updateUserPasswordDto: UpdateUserPasswordDto,
  ) {
    const userPassword = (await this.userRepository.findOne(id)).password;
    const oldPassword = await bcrypt.hash(
      updateUserPasswordDto.oldPassword,
      parseInt(this.configService.get('HASHING_SALT_OF_ROUND')),
    );
    const isPasswordMatch = await bcrypt.compare(userPassword, oldPassword);
    if (!isPasswordMatch) {
      throw new ForbiddenException();
    }

    const newPassword = await bcrypt.hash(
      updateUserPasswordDto.newPassword,
      parseInt(this.configService.get('HASHING_SALT_OF_ROUND')),
    );
    return this.userRepository.update(id, { password: newPassword });
  }

  async remove(id: string): Promise<any> {
    return this.userRepository.remove(id);
  }
}
