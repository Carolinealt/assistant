import FilterTodo from "./FilterTodo/FilterTodo";
import StatsTodo from "./StatsTodo/StatsTodo";
import css from "./TaskBar.module.css";
const TaskBar = () => {
  return (
    <div className={css.containerBar}>
      <div className={css.itemStats}>
        <h2>Tasks</h2>
        <StatsTodo />
      </div>
      <div className={css.itemFilter}>
        <h2>Filter</h2>
        <FilterTodo />
      </div>
    </div>
  );
};

export default TaskBar;
