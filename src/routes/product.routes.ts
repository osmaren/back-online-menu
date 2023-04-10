import { Router, Request, Response } from 'express';
import { Product, IProduct } from '../models/product.model';

const router = Router();

export const productRoutes = (app: any) => {
    router.get('', async (_req: Request, res: Response) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    });

    router.post('', async (req: Request, res: Response) => {
        const { name, price }: IProduct = req.body;

        try {
            const product = new Product({ name, price });
            await product.save();
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    });

    app.use('/products', router);
}
