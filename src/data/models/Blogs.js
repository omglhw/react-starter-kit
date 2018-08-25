/**
 * by huiwu
 * blog表
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Blogs = Model.define('Blogs', {
  blogsId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  blogTitle: {
    type: DataType.STRING(255),
    comment: 'blog名称',
    allowNull: false,
  },
  subBlogTitle: {
    type: DataType.STRING(255),
    comment: '子blog名称',
  },
  blogDetail: {
    type: DataType.STRING(500),
    comment: 'blog简介',
  },
  blogContent: {
    type: DataType.TEXT,
    comment: 'blog内容',
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

export default Blogs;
