import { Request, Response } from 'express';
import UserService from '../services/user.service';

const userService = new UserService();

class UserController {
    static async getAll(req: Request, res: Response): Promise<void> {
        const users = await userService.getAll();
        res.json(users);
    }

    static async create(req: Request, res: Response): Promise<void> {
        const user = req.body;
        const newUser = await userService.create(user);
        res.json(newUser);
    }

    static async getOne(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        const user = await userService.getOne(userId);

        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.json(user);
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        const user = req.body;
        const updatedUser = await userService.update(userId, user);

        if (!updatedUser) {
            res.status(404).send('User not found');
        } else {
            res.json(updatedUser);
        }
    }

    static async delete(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        await userService.delete(userId);
        res.sendStatus(204);
    }
}

export default UserController;
