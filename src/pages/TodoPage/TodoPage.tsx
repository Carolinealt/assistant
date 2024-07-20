import React from "react";
import css from "./TodoPage.module.css";
import TaskBar from "../../components/Todo/TaskBar/TaskBar";
import TaskForm from "../../components/Todo/TaskForm/TaskForm";
import TaskList from "../../components/Todo/TaskList/TaskList";
const TodoPage = () => {
  return (
    <div>
      <TaskBar />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TodoPage;
