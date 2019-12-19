/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-18 16:07:43
 * @LastEditTime : 2019-12-18 17:23:35
 * @FilePath: /node-server/src/controller/UserController.ts
 */
import { Controller, Get, Req, Res } from '@nestjs/common';
import { UserServiceImpl } from 'src/service/impl/UserServiceImpl';
import { ResultVoUtil } from 'src/utils/ResultVoUtil';

@Controller()
export class UserController {
  constructor(private readonly userService: UserServiceImpl) {}

  @Get('/test')
  public async test(@Req() req, @Res() res) {
    const data = await this.userService.getHello();
    res.systemInfo.info("a={}",{a:"name"})
    
    new ResultVoUtil(res).success(data);
  }
}
