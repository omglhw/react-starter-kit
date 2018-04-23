/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Sequelize, { Op } from 'sequelize';
import config from '../config';

const Db = config.mysql;
const sequelize = new Sequelize(Db.database, Db.username, Db.password, {
  host: Db.host,
  port: Db.port,
  dialect: 'mysql',
  pool: {
    max: 50,
    min: 0,
    idle: 10000,
  },
  dialectOptions: {
    // MySQL > 5.5，其它数据库删除此项
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_520_ci',
    supportBigNumbers: true,
    bigNumberStrings: true,
  },
  operatorsAliases: Op,
  define: {
    freezeTableName: true,
  },
});

export default sequelize;
