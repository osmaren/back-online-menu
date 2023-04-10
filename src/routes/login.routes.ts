import { Router, Express } from 'express';
import LoginController from '../controllers/login.controller';

const router = Router();

export const loginRoutes = (app: Express) => {
    router.post('/login', LoginController.login);

    app.use('/auth', router);
}

export default router;
