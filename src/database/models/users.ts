import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Users extends Model {
  id!: number;
  username!: string;
  name!: string;
  password!: string;
}

Users.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  }
);

export default Users;
