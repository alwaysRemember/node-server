/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-18 11:50:43
 * @LastEditTime : 2019-12-18 11:50:54
 * @FilePath: /node-server/src/Application.ts
 */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import mysqlConfig from './config/mysqlConf';
import { UserModule } from './modules/UserModule';
import { LoggerMiddleware } from './middleware/LoggerMiddleware';

@Module({
  imports: [TypeOrmModule.forRoot(mysqlConfig), UserModule],
})
export default class Application implements NestModule {
  constructor(private readonly connection: Connection) {}
  
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
