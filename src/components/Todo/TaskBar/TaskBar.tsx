import FilterTodo from "./FilterTodo/FilterTodo";
import StatsTodo from "./StatsTodo/StatsTodo";
import css from "./TaskBar.module.css";
const TaskBar = () => {
  return (
    <div className={css.containerBar}>
      <h2>Tasks</h2>
      <StatsTodo />
      <h2>Filter</h2>
      <FilterTodo />
    </div>
  );
};

export default TaskBar;
