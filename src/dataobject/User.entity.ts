import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-18 17:03:46
 * @LastEditTime : 2019-12-18 17:04:01
 * @FilePath: /node-server/src/dataobject/User.entity.ts
 */

@Entity("tb_user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  userName: string;

  @Column('text')
  description: string;

  @Column('int')
  age: number;
}
