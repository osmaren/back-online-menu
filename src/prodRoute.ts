import { Router, Request, Response } from 'express';
import { Product, IProduct } from './prodModel';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req: Request, res: Response) => {
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

export default router;
