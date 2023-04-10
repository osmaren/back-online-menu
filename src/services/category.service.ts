import { Category, CategoryDocument } from '../models/category.model';

class CategoryService {
    static async create(name: string, parent?: string): Promise<CategoryDocument> {
        const category: CategoryDocument = await Category.create({
            name,
            parent,
        });

        return category;
    }

    static async getAll(): Promise<CategoryDocument[]> {
        const categories: CategoryDocument[] = await Category.find().populate('parent');
        return categories;
    }

    static async getOne(id: string): Promise<CategoryDocument | null> {
        const category: CategoryDocument | null = await Category.findById(id).populate('parent');
        return category;
    }

    static async update(id: string, name: string, parent?: string): Promise<CategoryDocument | null> {
        const category: CategoryDocument | null = await Category.findByIdAndUpdate(
            id,
            { $set: { name, parent } },
            { new: true }
        ).populate('parent');

        return category;
    }

    static async delete(id: string): Promise<CategoryDocument | null> {
        const category: CategoryDocument | null = await Category.findByIdAndDelete(id);
        return category;
    }
}

export default CategoryService;
