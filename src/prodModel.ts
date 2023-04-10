import mongoose from 'mongoose';

interface IProduct {
    name: string;
    price: number;
}

const productSchema = new mongoose.Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});

const Product = mongoose.model<IProduct>('Product', productSchema);

export { Product, IProduct };
