import TaskBar from "../../components/Todo/TaskBar/TaskBar";
import TaskForm from "../../components/Todo/TaskForm/TaskForm";
import TaskList from "../../components/Todo/TaskList/TaskList";
import { useSelector } from "react-redux";
import { selectTaskList } from "../../redux/tasks/listTasks/selectors";
import css from "./TodoPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../../redux/tasks/listTasks/operations";
const TodoPage = () => {
  const list = useSelector(selectTaskList);
  const dispatch = useDispatch()
  useEffect(() => { dispatch(fetchTasks()) }, [dispatch])

  return (
    <div className={css.container}>
      <TaskBar />
      <TaskForm />
      {list && <TaskList />}
    </div>
  );
};

export default TodoPage;
