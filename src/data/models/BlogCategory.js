/**
 * by huiwu
 * blog分类表
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const BlogCategory = Model.define('BlogCategory', {
  blogCategoryId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  parentId: {
    type: DataType.UUID,
    comment: '父级ID',
  },
  blogCategoryName: {
    type: DataType.STRING(255),
    comment: '分类名称',
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

export default BlogCategory;
