import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  create(name: string) {
    return this.userModel.create({ name: String(name) });
  }

  findAll() {
    return this.userModel.findAll();
  }
}
