/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://satishiter:iter@cluster0.rofgf6n.mongodb.net/')
    ,UserModule,
    TaskModule,
  ],
})
export class AppModule {}
