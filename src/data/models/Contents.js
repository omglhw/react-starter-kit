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

const contentTableSize = 20;
const contentModelList = {};
for (let i = 0; i < contentTableSize; i += 1) {
  const key = `Content_${i + 1}`;
  contentModelList[key] = Model.define(key, {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },
    title: {
      type: DataType.STRING(255),
    },
    content: {
      type: DataType.TEXT,
    },
  });
}

export default contentModelList;
