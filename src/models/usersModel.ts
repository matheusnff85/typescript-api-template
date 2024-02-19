import Users from '../database/models/users';
import { IUser } from '../interfaces/IUser';

export default class UsersModel {
  private _userModel = Users;

  public async create(newUser: IUser): Promise<IUser> {
    const result = await this._userModel.create(newUser);
    return result;
  }

  public async findOne(
    username: string,
    password: string
  ): Promise<IUser | null> {
    const result = await this._userModel.findOne({
      where: { username, password },
      attributes: { exclude: ['password'] },
    });
    return result;
  }
}
