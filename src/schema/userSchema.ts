/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-19 15:20:16
 * @LastEditTime : 2019-12-19 15:20:36
 * @FilePath: /node-server/src/schema/UserSchema.ts
 */
import * as Joi from "@hapi/joi";

export const userSchma = Joi.object().keys({
  userName: Joi.string().alphanum().required(),
  age: Joi.number()
    .min(1)
    .required(),
  description: Joi.string(),
});
