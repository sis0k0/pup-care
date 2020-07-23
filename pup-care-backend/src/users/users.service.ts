import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async remove(_id: string): Promise<any> {
    return this.userModel.findOneAndRemove({ _id });
  }

  async update(_id: string, update: UpdateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ _id }, update);
  }
}