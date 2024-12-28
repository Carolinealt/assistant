import { TasksCollection } from '../db/models/task.js';

export const getAllTasks = async () =>{
    const tasks = TasksCollection.find();
    return tasks;
}