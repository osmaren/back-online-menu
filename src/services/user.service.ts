import { User, UserDocument } from '../models/user.model';

class UserService {
    async getAll(): Promise<UserDocument[]> {
        return User.find();
    }

    async create(user: User): Promise<UserDocument> {
        return User.create(user);
    }

    async getOne(userId: string): Promise<UserDocument | null> {
        return User.findById(userId);
    }

    async update(userId: string, user: User): Promise<UserDocument | null> {
        return User.findByIdAndUpdate(userId, user, { new: true });
    }

    async delete(userId: string): Promise<void> {
        await User.findByIdAndDelete(userId);
    }
}

export default UserService;
