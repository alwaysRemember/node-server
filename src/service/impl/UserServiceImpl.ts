import { UserService } from '../UserService';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repository/UserRepository';
import { User } from 'src/dataobject/User.entity';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  getHello(): Promise<Array<User>> {
    return this.userRepository.findAll();
  }
}
