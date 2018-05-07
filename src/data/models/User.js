/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define(
  'User',
  {
    userId: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },
    userName: {
      type: DataType.STRING(20),
      allowNull: false,
      comment: '用户名称',
    },
    userAccount: {
      type: DataType.STRING(50),
      unique: true,
      allowNull: false,
      validate: {
        is: {
          args: /^[0-9a-zA-Z_]{1,}$/,
          msg: '数字、26个英文字母或者下划线',
        },
      },
      comment: '用户账号',
    },
    userPassword: {
      type: DataType.STRING(50),
      unique: true,
      allowNull: false,
      comment: '用户密码',
    },
    userEmail: {
      type: DataType.STRING(100),
      validate: { isEmail: true },
      unique: true,
      comment: '用户邮箱',
    },
    userPhone: {
      type: DataType.STRING(20),
      comment: '用户手机',
    },
    userDisabled: {
      type: DataType.BOOLEAN,
      defaultValue: false,
      comment: '是否禁用',
    },
  },
  {
    indexes: [{ fields: ['userEmail'] }],
  },
);

export default User;
