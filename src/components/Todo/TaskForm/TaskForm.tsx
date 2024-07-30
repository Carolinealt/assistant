import { useId } from "react";
import css from "./TaskForm.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/tasks/listTasks/slice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const inputTaskId = useId();
  const handleSubmit = (values, action) => {
    const taskId = Date.now();
    if (!values.task.trim()) {
      // alert("enter something...");
      return;
    }
    const task = { content: values.task, id: taskId, completed: false };
    dispatch(addTask(task));
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
