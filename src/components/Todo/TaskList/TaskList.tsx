import { useSelector } from "react-redux";
import TaskItem from "./Task/Task";
import { RootState } from "../../../redux/store";

const TaskList = () => {
  const list = useSelector((state: RootState) => state.tasks.items);

  return (
    <div>
      <ul>
        {list.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
