/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-19 11:01:03
 * @LastEditTime : 2019-12-19 11:01:33
 * @FilePath: /node-server/src/middleware/logger.ts
 */
import { NestMiddleware, Injectable } from '@nestjs/common';
import log4js, { category, level } from '../config/logConf';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    category.forEach(item => {
      level.forEach(type => {
        let log = `${item}${type}`;
        res[log] = log4js.getLogger(log);
      });
    });
    next();
  }
}
