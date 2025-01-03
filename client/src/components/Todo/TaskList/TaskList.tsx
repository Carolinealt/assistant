import { useSelector } from "react-redux";
import TaskItem from "./Task/Task";
import css from "./TaskList.module.css";
import { selectVisibleList } from "../../../redux/tasks/listTasks/selectors";
const TaskList = () => {
  const list = useSelector(selectVisibleList);

  return (
    <div>
      <ul className={css.list}>
        {list.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
