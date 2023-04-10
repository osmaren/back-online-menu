import { Router, Express } from 'express';
import categoryController from '../controllers/category.controller';
import AuthMiddleware from '../middlewares/auth.middleware'

const router = Router();

export const categoryRoutes = (app: Express) => {
    router.post('', AuthMiddleware.authenticate, categoryController.create);
    router.get('', AuthMiddleware.authenticate, categoryController.getAll);
    router.get('/:id', AuthMiddleware.authenticate, categoryController.getOne);
    router.patch('/:id', AuthMiddleware.authenticate, categoryController.update);
    router.delete('/:id', AuthMiddleware.authenticate, categoryController.delete);

    app.use('/category', router);
}
