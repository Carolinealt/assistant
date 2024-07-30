import { useId } from "react";
import css from "./Task.module.css";
import { Task } from "../../../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import {
  deleteTask,
  toggleTask,
} from "../../../../redux/tasks/listTasks/slice";
import clsx from "clsx";

interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps) => {
  let isActiveTask = false;
  // const options = clsx(
  //   isActiveTask ? css["contentCompleted"] : css["contentActive"]
  // );
  // console.log(options);

  const checkId = useId();
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };
  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));
    isActiveTask = !isActiveTask;
  };
  return (
    <li
      key={task.id}
      className={clsx(css.item, task.completed && css["itemCompleted"])}
    >
      <div className={css.checkTaskContainer}>
        <label htmlFor={checkId} className={css.label}>
          <input
            type="checkbox"
            id={checkId}
            name="status"
            onChange={() => handleToggleTask(task.id)}
            className={css.checkbox}
          ></input>
          <span className={css.containerCheckbox}>
            <svg className={css.iconCheckbox} width={18} height={18}>
              <use href="public/image.svg#icon-checkmark"></use>
            </svg>
          </span>
        </label>
        <p
          className={clsx(
            task.completed ? css["contentCompleted"] : css["contentActive"]
          )}
        >
          {task.content}
        </p>
      </div>
      <button onClick={() => handleDelete(task.id)} className={css.btn}>
        <svg className={css.iconClose} width={10} height={10}>
          <use href="public/image.svg#icon-cross"></use>
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
