import React, { useId } from "react";
import { Task } from "../../../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import {
  deleteTask,
  toggleTask,
} from "../../../../redux/tasks/listTasks/slice";

interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps) => {
  const checkId = useId();
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };
  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));
  };
  return (
    <li key={task.id}>
      <label htmlFor={checkId}>
        <input
          type="checkbox"
          id={checkId}
          name="status"
          onChange={() => handleToggleTask(task.id)}
        ></input>
      </label>
      <p>{task.content}</p>
      <button onClick={() => handleDelete(task.id)}>X</button>
    </li>
  );
};

export default TaskItem;
