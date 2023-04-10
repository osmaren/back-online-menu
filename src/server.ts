import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './prodRoute';

const app = express();

app.use(express.json());
const port = 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
        app.use('/products', productRoutes);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(error => {
        console.log('Error connecting to MongoDB', error);
    });

export default app;