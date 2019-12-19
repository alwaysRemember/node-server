/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2019-12-19 10:43:35
 * @LastEditTime : 2019-12-19 10:43:47
 * @FilePath: /node-server/src/config/logConf.ts
 */
import * as path from 'path';
import * as fs from 'fs';
import * as log4js from 'log4js';

export const category = ['system'];

export const level = ['Error', 'Info'];

let loggerConf = {
  appenders: {
    console: {
      type: 'console',
    },
  },
  replaceConsole: true, // 控制台日志输出
  categories: {
    default: {
      appenders: ['console'],
      level: 'info',
    },
  },
};

const DEFAULT_PATTERN = 'yyyy-MM-dd.log';
// 定义log主目录
const dirPath = path.join(__dirname, `../log`);
// 定义level目录
let infoPath = path.join(dirPath, '/info/');
let errorPath = path.join(dirPath, '/error/');

// 生成目录
checkFile(dirPath);
checkFile(infoPath);
checkFile(errorPath);

// 构建分级log配置
category.forEach(c => {
  // 生成配置(info|error)
  level.forEach(type => {
    const name: string = `${c}${type}`;

    loggerConf.appenders[name] = {
      type: 'dateFile',
      pattern: DEFAULT_PATTERN,
      filename: path.join((type === 'Info' && infoPath) || errorPath, type.toLowerCase()),
      alwaysIncludePattern: true,
      category: name,
    };

    loggerConf.categories[name] = {
      appenders: [name, 'console'],
      level: type.toLowerCase(),
    };
  });
});

log4js.configure(loggerConf);

function checkFile(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

export default log4js;
