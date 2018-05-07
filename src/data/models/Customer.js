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

const hostDomain = 'bbb.com';
const Customer = Model.define(
  'Customer',
  {
    customerId: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    customerName: {
      type: DataType.STRING(50),
      allowNull: false,
      comment: '用户名称',
    },
    customerCode: {
      type: DataType.STRING(20),
      unique: true,
      allowNull: false,
      validate: {
        is: {
          args: ['^[a-z]+$', 'i'],
          msg: '必须是小写英文字符',
        },
      },
      comment: '代码',
    },
    customerCompany: {
      type: DataType.STRING(20),
      comment: '公司',
    },
    customerContacts: {
      type: DataType.STRING(10),
      comment: '联系人',
    },
    customerPhone: {
      type: DataType.STRING(20),
      allowNull: false,
      comment: '手机',
    },
    // customer_subdomain: {
    //   type: DataType.STRING(200),
    //   allowNull: false,
    //   unique: true,
    // },
    customerDomain: {
      type: DataType.STRING(200),
      unique: true,
      comment: '绑定域名',
    },
    // customer_domain2: {
    //   type: DataType.STRING(200),
    //   unique: true,
    // },
    // customer_domain3: {
    //   type: DataType.STRING(200),
    //   unique: true,
    // },
    customerCheckPhone: {
      type: Boolean,
      defaultValue: false,
      allowNull: false,
      comment: '是否启用手机验证用户',
    },
  },
  {
    getterMethods: {
      customerSubdomain() {
        return `${this.customerCode}.${hostDomain}`;
      },
    },
    indexes: [{ fields: ['customerName'] }],
  },
);

export default Customer;
