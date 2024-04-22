/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './TaskService';

@Module({
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
