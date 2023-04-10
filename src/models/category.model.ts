import { Schema, model, Document } from 'mongoose';

interface Category {
  name: string;
}

interface CategoryDocument extends Category, Document {}

const categorySchema = new Schema<CategoryDocument>({
  name: { type: String, required: true, unique: true },
});

const Category = model<CategoryDocument>('Category', categorySchema);

export { Category, CategoryDocument };