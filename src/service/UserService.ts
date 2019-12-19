import { User } from "src/dataobject/User.entity";

export interface UserService {
  getHello(): Promise<Array<User>>;
}
