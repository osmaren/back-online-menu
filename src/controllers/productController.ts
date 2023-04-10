import { Request, Response } from 'express';
import { Product } from '../models/product.model';

const productController = {
    async getAll(req: Request, res: Response) {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async getOne(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const product = await Product.findById(id).populate('categories');

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            res.status(200).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async create(req: Request, res: Response) {
        const { name, qty, price, categories } = req.body;

        try {
            const product = await Product.create({ name, qty, price, categories });

            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, qty, price, categories } = req.body;

        try {
            const product = await Product.findByIdAndUpdate(
                id,
                { name, qty, price, categories },
                { new: true }
            ).populate('categories');

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            res.status(200).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const product = await Product.findByIdAndDelete(id);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            res.status(200).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
};

export default productController;
