import { Router, Express } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

export const userRoutes = (app: Express) => {
    router.post('/', UserController.create);
    router.get('', UserController.getAll);
    router.get('/:id', UserController.getOne);
    router.patch('/:id', UserController.update);
    router.delete('/:id', UserController.delete);

    app.use('/user', router);
}

export default router;
