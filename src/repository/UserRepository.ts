/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-18 17:25:03
 * @LastEditTime : 2019-12-19 14:36:29
 * @FilePath: /node-server/src/repository/UserRepository.ts
 */
import { Repository, EntityRepository, Connection } from 'typeorm';
import { User } from 'src/dataobject/User.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  constructor(private readonly connection: Connection) {
    super();
  }
  /**
   * 查询所有用户
   */
  findAll(): Promise<Array<User>> {
    return this.connection
      .getRepository(User)
      .createQueryBuilder('user')
      .getMany();
  }
}
