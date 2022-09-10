import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get("/")
    async getAll(){
        return await this.userService.findAll()
    }

    @Post("/")
    async addUser(@Body() createUserDTO:CreateUserDTO){
        const user =  await this.userService.addUser(createUserDTO)
        console.log(user)
        return user
    }
}
