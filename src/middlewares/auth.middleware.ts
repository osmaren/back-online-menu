import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ErrorHandler } from '../utils/error';

class AuthMiddleware {

    static authenticate(req: Request, res: Response, next: NextFunction): void {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new ErrorHandler(401, 'No token provided');
        }

        jwt.verify(token, process.env.JWT_SECRET as string, (err) => {
            if (err) {
                throw new ErrorHandler(403, 'Invalid token');
            }

            next();
        });
    }
}

export default AuthMiddleware;
