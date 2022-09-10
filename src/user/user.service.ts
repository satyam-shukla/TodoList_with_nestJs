import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModal:Model<UserDocument>){}

    async findAll():Promise<User[]>{
        return await this.userModal.find().exec()
    }

    async findOne(id:string):Promise<User>{
        return await this.userModal.findById(id).exec()
    }

    async addUser(createUserDTO: CreateUserDTO) {
        if ((await this.userModal.findOne({ username: createUserDTO.username }))){
          throw new ConflictException('User already exist');
        }
        const user = new this.userModal(createUserDTO);
        return await user.save();
    }
}
