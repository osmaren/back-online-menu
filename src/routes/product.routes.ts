import { Router } from 'express';
import productController from '../controllers/productController';


const router = Router();

export const productRoutes = (app: any) => {
    router.get('', productController.getAll);

    router.post('', productController.create);

    app.use('/products', router);
}
