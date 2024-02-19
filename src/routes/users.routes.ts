import { Router } from 'express';
import UsersController from '../controllers/usersController';

const usersController = new UsersController();
const usersRouter = Router();

usersRouter.post('/users/register', usersController.create);
usersRouter.post('/users/login', usersController.login);

export default usersRouter;
