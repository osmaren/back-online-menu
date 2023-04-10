import { Schema, model, Document } from 'mongoose';

interface Category {
    parent: string | null;
    name: string;
}

interface CategoryDocument extends Category, Document { }

const categorySchema = new Schema<CategoryDocument>({
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        default: null,
    },
    name: { type: String, required: true, unique: true },
});

const Category = model<CategoryDocument>('Category', categorySchema);

export { Category, CategoryDocument };