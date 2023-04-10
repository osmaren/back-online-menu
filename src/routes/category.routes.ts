import { Router, Express } from 'express';
import categoryController from '../controllers/category.controller';
import AuthMiddleware from '../middlewares/auth.middleware'

const router = Router();

export const categoryRoutes = (app: Express) => {
    router.get('', AuthMiddleware.authenticate, categoryController.getAll);
    router.post('', AuthMiddleware.authenticate, categoryController.create);

    app.use('/category', router);
}
