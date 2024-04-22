/* eslint-disable prettier/prettier */
import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

export interface Task extends mongoose.Document {
  title: string;
  description: string;
  completed: boolean;
  user: string;
}