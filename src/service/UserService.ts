/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-18 17:07:40
 * @LastEditTime : 2019-12-19 16:31:42
 * @FilePath: /node-server/src/service/UserService.ts
 */
import { User } from 'src/dataobject/User.entity';
import { UserForm } from 'src/form/UserForm';

export interface UserService {
  save(user: UserForm): Promise<User>;
}
