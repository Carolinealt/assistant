import React from "react";
import { Task } from "../../../../types";

interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps) => {
  return (
    <li key={task.id}>
      <p>{task.content}</p>
    </li>
  );
};

export default TaskItem;
