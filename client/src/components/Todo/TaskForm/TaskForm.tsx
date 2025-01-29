import { useId } from "react";
import css from "./TaskForm.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addTasks } from "../../../redux/tasks/listTasks/operations";

const TaskForm = () => {
  const dispatch = useDispatch();
  const inputTaskId = useId();
  const handleSubmit = (values, action) => {
    if (!values.task.trim()) {
      // alert("enter something...");
      return;
    }
    const task = { text: values.task, title: values.title ?? '', completed: false };
    dispatch(addTasks(task));
    action.resetForm();
  };
  return (
    <div>
      <Formik initialValues={{ task: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={inputTaskId}>Enter your task</label>
          <Field
            name="task"
            type="text"
            id={inputTaskId}
            className={css.inputTask}
          />
          <button type="submit" className={css.btn}>
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
