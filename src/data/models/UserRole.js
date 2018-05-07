import DataType from 'sequelize';
import Model from '../sequelize';

const UserRole = Model.define('UserRole', {
  userRoleId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  UserRoleName: {
    type: DataType.STRING(20),
  },
});

export default UserRole;
