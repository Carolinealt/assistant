import { useId } from "react";
import css from "./FilterTodo.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../../../redux/tasks/filterTasks/slice";
const FilterTodo = () => {
  const dispatch = useDispatch();
  const selectId = useId();
  const getVisibleTasks = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <label htmlFor={selectId}>to show </label>
          <Field
            as="select"
            name="status"
            id={selectId}
            className={css.select}
            onChange={getVisibleTasks}
          >
            <option value="all" className={css.option}>
              all
            </option>
            <option value="completed" className={css.option}>
              completed
            </option>
            <option value="active" className={css.option}>
              active
            </option>
          </Field>
          <label htmlFor={selectId}> tasks</label>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterTodo;
