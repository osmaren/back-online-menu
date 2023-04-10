import express from "express"
import { productRoutes } from "./product.routes"

export const routesApp = (app: any) => {
    app.use(express.json());
    productRoutes(app);
};