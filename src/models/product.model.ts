import { Schema, model, Document } from 'mongoose';

interface Product {
    categories: string[];
    name: string;
    qty: number;
    price: number;
}

interface ProductDocument extends Product, Document { }

const productSchema = new Schema<ProductDocument>({
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
});

const Product = model<ProductDocument>('Product', productSchema);

export { Product, ProductDocument };