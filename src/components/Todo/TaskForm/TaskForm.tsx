import React, { useId } from "react";
import css from "./TaskForm.modle.css";
import { Field, Form, Formik } from "formik";
const TaskForm = () => {
  const taskId = useId();
  const handleSubmit = (values, action) => {
    action.resetForm();
  };
  return (
    <div>
      <Formik initialValues={{ task: "" }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor={taskId}>Enter your task</label>
          <Field name="task" type="text" id={taskId} />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
