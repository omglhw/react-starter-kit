import DataType from 'sequelize';
import Model from '../sequelize';

const Site = Model.define('Site', {
  siteId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  siteName: {
    type: DataType.STRING(20),
    allowNull: false,
    comment: '站点名称',
  },
  siteSeoTitle: {
    type: DataType.STRING(100),
    comment: 'seo 标题',
  },
  siteSeoKeyword: {
    type: DataType.STRING(100),
    comment: 'seo 关键字',
  },
  siteSeoDescription: {
    type: DataType.STRING(250),
    comment: 'seo 描述',
  },
  siteSubdomain: {
    type: DataType.STRING(200),
    allowNull: false,
    unique: true,
  },
  siteDomain: {
    type: DataType.STRING(200),
    unique: true,
    comment: '绑定域名',
  },
});

export default Site;
