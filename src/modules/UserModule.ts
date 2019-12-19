import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/dataobject/User.entity';
import { UserController } from 'src/controller/UserController';
import { UserServiceImpl } from 'src/service/impl/UserServiceImpl';
import { UserRepository } from 'src/repository/UserRepository';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserRepository])],
  controllers: [UserController],
  providers:[UserServiceImpl]
})
export class UserModule {}
