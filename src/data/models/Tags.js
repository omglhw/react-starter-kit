/**
 * by huiwu
 * tag表
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Tags = Model.define('Tags', {
  tagsId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  tagName: {
    type: DataType.STRING(255),
    comment: 'tag名称',
    allowNull: false,
    unique: true,
  },
  tagDetail: {
    type: DataType.STRING(500),
    comment: 'tag简介',
  },
  isShow: {
    type: DataType.BOOLEAN,
    defaultValue: true,
    comment: '是否显示',
  },
  isStrong: {
    type: DataType.BOOLEAN,
    defaultValue: false,
    comment: '是否加重',
  },
  sortNo: {
    type: DataType.INTEGER,
    defaultValue: 0,
    // set(val) {
    //   console.log(val, this);
    //   this.setDataValue('sortNo', val);
    // },
    comment: '排序',
  },
});

export default Tags;
