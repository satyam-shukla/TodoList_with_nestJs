import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/Todo"),TodoModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
