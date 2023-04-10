import { Request, Response } from 'express';
import { CategoryDocument } from '../models/category.model';
import { CategoryService } from '../services';

class CategoryController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { name, parent } = req.body;

            const category: CategoryDocument = await CategoryService.create(name, parent);

            res.status(201).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const categories: CategoryDocument[] = await CategoryService.getAll();

            res.status(200).json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;

            const category: CategoryDocument | null = await CategoryService.getOne(id);

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

    async update(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const { name, parent } = req.body;

            const category: CategoryDocument | null = await CategoryService.update(id, name, parent);

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

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;

            const category: CategoryDocument | null = await CategoryService.delete(id);

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
}

export default new CategoryController();
