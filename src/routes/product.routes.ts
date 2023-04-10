import { Router } from 'express';
import productController from '../controllers/product.controller';


const router = Router();

export const productRoutes = (app: any) => {
    router.get('', productController.getAll);
    router.get('/:id', productController.getOne);
    router.post('', productController.create);
    router.patch('/:id', productController.update);
    router.delete('/:id', productController.delete);

    app.use('/product', router);
}
