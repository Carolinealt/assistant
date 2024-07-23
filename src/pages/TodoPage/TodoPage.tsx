import { useEffect } from "react";
import TaskBar from "../../components/Todo/TaskBar/TaskBar";
import TaskForm from "../../components/Todo/TaskForm/TaskForm";
import TaskList from "../../components/Todo/TaskList/TaskList";
import { useSelector } from "react-redux";
import { selectTaskList } from "../../redux/tasks/listTasks/selectors";
const TodoPage = () => {
  const list = useSelector(selectTaskList);
  useEffect(() => {
    console.log("List updated:", list);
  }, [list]);

  return (
    <div>
      <TaskBar />
      <TaskForm />
      {list && <TaskList />}
    </div>
  );
};

export default TodoPage;
