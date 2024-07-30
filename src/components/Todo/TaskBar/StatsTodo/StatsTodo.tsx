import React from "react";
import css from "./StatsTodo.module.css";
import { useSelector } from "react-redux";
import {
  selectActiveTasks,
  selectCompletedTasks,
} from "../../../../redux/tasks/listTasks/selectors";
const StatsTodo = () => {
  const numberActiveTasks = useSelector(selectActiveTasks);
  const nmbCompletedTasks = useSelector(selectCompletedTasks);
  return (
    <div className={css.container}>
      <p>Active: {numberActiveTasks}</p>
      <p>Completed: {nmbCompletedTasks}</p>
    </div>
  );
};

export default StatsTodo;
