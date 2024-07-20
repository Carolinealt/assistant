import React, { useId } from "react";
import css from "./FilterTodo.module.css";
import { Field, Form, Formik } from "formik";
const FilterTodo = () => {
  const selectId = useId();
  return (
    <div>
      <Formik initialValues={{ status: "all" }} onSubmit={() => {}}>
        <Form>
          <label htmlFor={selectId}>to show</label>
          <Field as="select" name="status" id={selectId}>
            <option value="finished">finished tasks</option>
            <option value="inProgress">In progress</option>
            <option value="all">All tasks</option>
          </Field>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterTodo;
