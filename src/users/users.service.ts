import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput, User, UserDocument } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel:Model<UserDocument>) {}

    async findAll() {
        return await this.userModel.find().lean();
    }

    async findById(id: string) {
        return await this.userModel.findById(id).lean();
    }

    async createUser(user: CreateUserInput) {       
        return await this.userModel.create(user);
    }

    async deleteUserById(id: string) {       
        return await this.userModel.findByIdAndDelete(id);
    }
}
