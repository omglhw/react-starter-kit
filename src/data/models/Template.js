import DataType from 'sequelize';
import Model from '../sequelize';

const UserRole = Model.define('Template', {
  templateId: {
    type: DataType.UUID,
    primaryKey: true,
  },
  templateName: {
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  },
  templateUrl: {
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  },
});

export default UserRole;
