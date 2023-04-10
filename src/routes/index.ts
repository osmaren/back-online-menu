import express, { Express } from 'express'
import { categoryRoutes } from './category.routes'
import { productRoutes } from './product.routes'
import { loginRoutes } from './login.routes'
import { userRoutes } from './user.routes'

export const routesApp = (app: Express) => {
    app.use(express.json());
    userRoutes(app);
    loginRoutes(app);
    categoryRoutes(app);
    productRoutes(app);
};