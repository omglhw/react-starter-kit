/**
 * by huiwu
 * 产品表
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Products = Model.define('Products', {
  productId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  productName: {
    type: DataType.STRING(255),
    comment: '产品名称',
    allowNull: false,
    unique: true,
  },
  productUrl: {
    type: DataType.STRING(255),
    comment: '产品url',
  },
  productMainPic: {
    type: DataType.STRING(255),
    comment: '产品图片',
  },
  productPicList: {
    type: DataType.STRING(255),
    comment: '产品图片',
  },
  productDetail: {
    type: DataType.STRING(500),
    comment: '产品简介',
  },
  productContent: {
    type: DataType.TEXT,
    comment: '产品内容',
  },

  Price: {
    type: DataType.DECIMAL,
    comment: '原价',
    defaultValue: 0,
  },
  discountedPrice: {
    type: DataType.DECIMAL,
    comment: '优惠价',
    defaultValue: 0,
  },
  siteSeoKeyword: {
    type: DataType.STRING(100),
    comment: '关键字',
  },
  siteSeoDescription: {
    type: DataType.STRING(250),
    comment: '描述',
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

export default Products;
