import { Request, Response, NextFunction } from 'express';
import { LoginService } from '../services';

class LoginController {
    static async login(req: Request, res: Response, next: NextFunction) {

        try {
            const { email, password } = req.body;
            const loginService = new LoginService();
            const token = await loginService.execute(email, password);
            res.send({ token });
        } catch (err) {
            next(err);
        }
    }
}

export default LoginController;

