import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/usersModel';
import CustomError from '../types/customError';
import StatusCodes from '../types/statusCodes';

export default class UsersServices {
  constructor(private userModel: UserModel = new UserModel()) {}

  public async create(newUser: IUser): Promise<IUser> {
    const result = await this.userModel.create(newUser);
    return result;
  }

  public async login(loginObj: ILogin): Promise<IUser> {
    const { username, password } = loginObj;
    const result = await this.userModel.findOne(username, password);
    if (result) return result;
    throw new CustomError(
      StatusCodes.BAD_REQUEST,
      'Username or Password Incorrect'
    );
  }
}
