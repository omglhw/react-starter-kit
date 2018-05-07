import DataType from 'sequelize';
import Model from '../sequelize';

const Component = Model.define('Component', {
  componentId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  componentName: {
    type: DataType.STRING(20),
    allowNull: false,
  },
  siteSeoKeyword: {
    type: DataType.STRING(100),
  },
  siteSeoDescription: {
    type: DataType.STRING(250),
  },
});

export default Component;
