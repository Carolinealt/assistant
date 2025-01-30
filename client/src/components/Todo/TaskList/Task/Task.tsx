import { useId } from "react";
import css from "./Task.module.css";
import { Task } from "../../../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import clsx from "clsx";
import { deleteTask, toggleTask } from "../../../../redux/tasks/listTasks/operations";

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
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (taskId, taskIsCompleted) => {
    const queryToggleData = { _id: taskId, completed: !taskIsCompleted }
    dispatch(toggleTask(queryToggleData));

    isActiveTask = !isActiveTask;
  };
  return (
    <li
      key={task._id}
      className={clsx(css.item, task.completed && css["itemCompleted"])}
    >
      <div className={css.checkTaskContainer}>
        <label htmlFor={checkId} className={css.label}>
          <input
            type="checkbox"
            id={checkId}
            name="status"
            onChange={() => handleToggleTask(task._id, task.completed)}
            className={css.checkbox}
          ></input>
          <span className={css.containerCheckbox}>
            <svg className={css.iconCheckbox} width={18} height={18}>
              <use href="public/image.svg#icon-checkmark"></use>
            </svg>
          </span>
        </label>
        <div>
          {task.title && <p
            className={clsx(
              css.taskTitle,
              task.completed ? css["contentCompleted"] : css["contentActive"],
            )}
          >
            {task.title}
          </p>}
          <p
            className={clsx(
              task.completed ? css["contentCompleted"] : css["contentActive"]
            )}
          >
            {task.text}
          </p>

        </div>
      </div>
      <button onClick={() => handleDelete(task._id)} className={css.btn}>
        <svg className={css.iconClose} width={10} height={10}>
          <use href="public/image.svg#icon-cross"></use>
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
