/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-19 14:53:38
 * @LastEditTime : 2019-12-19 14:55:35
 * @FilePath: /node-server/src/pips/BodyCheck.ts
 */

import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import * as Joi from '@hapi/joi';

/**
 * 校验请求数据
 */
@Injectable()
export class ReqParamCheck implements PipeTransform {
  constructor(
    private readonly schema: Joi.ObjectSchema,
    private readonly toValidate = (metadata: ArgumentMetadata): boolean => true,
  ) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    // 校验类型
    if (!this.toValidate(metadata)) {
      return value;
    }

    // 校验参数
    try {
      await this.schema.validateAsync(value);
    } catch (e) {
      throw new HttpException(
        e.details[0].message.replace(/\"/g, ''),
        HttpStatus.OK,
      );
    }
    return value;
  }
}
