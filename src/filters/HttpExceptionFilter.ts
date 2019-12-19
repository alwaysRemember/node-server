/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-18 18:18:48
 * @LastEditTime : 2019-12-18 18:19:02
 * @FilePath: /node-server/src/filters/HttpExceptionFilter.ts
 */

import { ExceptionFilter, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { ResultVo } from 'src/viewobject/ResultVo';
import { ResultVoStatus } from 'src/enums/ResultVoStatus';

/**
 * 最终的异常会在这步捕获并且包装
 */
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    
    response
      .status(HttpStatus.OK)
      .json(new ResultVo(ResultVoStatus.TOAST, null,exception.message))
  }
}
