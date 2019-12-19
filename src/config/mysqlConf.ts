import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-18 15:37:32
 * @LastEditTime : 2019-12-18 15:44:39
 * @FilePath: /node-server/src/config/mysqlConf.ts
 */
import {join} from "path";
 
const defaultConfig:MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'tanghaojie',
  database: 'node_server',
  entities: [join(__dirname,"../dataobject/*.entity{.ts,.js}")],
  synchronize: true,
};

export default defaultConfig;
