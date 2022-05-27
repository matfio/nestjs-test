import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput, User, UserDocument } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel:Model<UserDocument>) {}

    async findAll() {
        //Populate will populate the products if any was added
        //I'm adding them by id and it's all automatic
        //(Wow)
        return await this.userModel.find().populate('products').exec(); 
    }

    async findById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async createUser(user: CreateUserInput) {       
        return await this.userModel.create(user);
    }

    async deleteUserById(id: string) {       
        return await this.userModel.findByIdAndDelete(id);
    }
}
