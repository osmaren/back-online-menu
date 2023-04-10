import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import { ErrorHandler } from '../utils/error';


class LoginService {
    async execute(email: string, password: string) {

        const user = await User.findOne({ email });

        if (!user) {
            throw new ErrorHandler(404, 'Usuário não encontrado');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new ErrorHandler(401, "Password incorreto.");
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, {
            expiresIn: '1d',
        });

        return token;
    }
}

export default LoginService;
