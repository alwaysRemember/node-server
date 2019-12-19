/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-18 16:07:43
 * @LastEditTime : 2019-12-18 17:23:35
 * @FilePath: /node-server/src/controller/UserController.ts
 */
import {
  Controller,
  Get,
  Req,
  Res,
  Body,
  Post,
  UsePipes,
} from '@nestjs/common';
import { UserServiceImpl } from 'src/service/impl/UserServiceImpl';
import { ResultVoUtil } from 'src/utils/ResultVoUtil';
import { User } from 'src/dataobject/User.entity';
import { ReqParamCheck } from 'src/pips/ReqParamCheck';
import { userSchma } from 'src/schema/UserSchema';
import { UserForm } from 'src/form/UserForm';

@Controller()
export class UserController {
  constructor(private readonly userService: UserServiceImpl) {}

  /**
   * 保存用户
   * @param res 
   * @param user 
   */
  @UsePipes(new ReqParamCheck(userSchma, ({ type }) => type === 'body'))
  @Post('/save-user')
  public async saveUser(@Res() res, @Body() user: UserForm) {
    let data: User;
    const result: ResultVoUtil = new ResultVoUtil(res);

    try {
      data = await this.userService.save(user);
    } catch (e) {
      return result.error(e.message);
    }
    result.success(data);
  }
}
