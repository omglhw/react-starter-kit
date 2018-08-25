/**
 * by huiwu
 * 图片表
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Photos = Model.define('Photos', {
  photoId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  photoName: {
    type: DataType.STRING(255),
    comment: '图片名称',
    allowNull: false,
    unique: true,
  },
  photoUrl: {
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
    comment: '图片url',
  },
  photoDetail: {
    type: DataType.STRING(500),
    comment: '图片简介',
  },
  photoKeyword: {
    type: DataType.STRING(100),
    comment: '关键字',
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

export default Photos;
