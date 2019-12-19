/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-18 17:08:36
 * @LastEditTime : 2019-12-19 16:32:04
 * @FilePath: /node-server/src/service/impl/UserServiceImpl.ts
 */
import { UserService } from '../UserService';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repository/UserRepository';
import { User } from 'src/dataobject/User.entity';
import { UserForm } from 'src/form/UserForm';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  save(user: UserForm): Promise<User> {
    return this.userRepository.save((user as unknown) as User);
  }
}
