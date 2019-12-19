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
