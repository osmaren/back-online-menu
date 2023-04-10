import { Router, Express } from 'express';
import productController from '../controllers/product.controller';
import AuthMiddleware from '../middlewares/auth.middleware'

const router = Router();

export const productRoutes = (app: Express) => {
    router.post('', AuthMiddleware.authenticate, productController.create);
    router.get('', AuthMiddleware.authenticate, productController.getAll);
    router.get('/:id', AuthMiddleware.authenticate, productController.getOne);
    router.patch('/:id', AuthMiddleware.authenticate, productController.update);
    router.delete('/:id', AuthMiddleware.authenticate, productController.delete);

    app.use('/product', router);
}
