import { Request, Response } from 'express';
import { Category, CategoryDocument } from '../models/category.model';

const categoryController = {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { name, parent } = req.body;

            const category: CategoryDocument = await Category.create({
                name,
                parent,
            });

            res.status(201).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const categories: CategoryDocument[] = await Category.find().populate('parent');

            res.status(200).json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async get(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;

            const category: CategoryDocument | null = await Category.findById(id).populate('parent');

            if (!category) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }

            res.status(200).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async updateCategory(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const { name, parent } = req.body;

            const category: CategoryDocument | null = await Category.findByIdAndUpdate(
                id,
                { name, parent },
                { new: true }
            ).populate('parent');

            if (!category) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }

            res.status(200).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async deleteCategory(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;

            const category: CategoryDocument | null = await Category.findByIdAndDelete(id);

            if (!category) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }

            res.status(200).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export default categoryController;
