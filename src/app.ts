import express from "express";
import { routesApp } from "./routes";
import { handleError } from "./utils/error";


const app = express();

routesApp(app);

app.use((err: any, _req: any, res: any, _next: any) => {
    handleError(err, res);
});

export default app;