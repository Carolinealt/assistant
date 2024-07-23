import React, { useId } from "react";
import css from "./TaskForm.modle.css";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/tasks/listTasks/slice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const inputTaskId = useId();
  const handleSubmit = (values, action) => {
    const taskId = Date.now();
    const task = { content: values.task, id: taskId };
    dispatch(addTask(task));
    action.resetForm(); 
  };
  return (
    <div>
      <Formik initialValues={{ task: "" }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor={inputTaskId}>Enter your task</label>
          <Field name="task" type="text" id={inputTaskId} />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
