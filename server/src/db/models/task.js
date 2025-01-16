import { model, Schema } from 'mongoose';

const tasksSchema = new Schema(
  {
    title: { type: String, required: false },
    text: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const TasksCollection = model('tasks', tasksSchema);
