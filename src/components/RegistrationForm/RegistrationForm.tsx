import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
// import css from 'RegistrationForm.module.css';
const RegistrationForm = () => {
  return (
    <div className={css.regіstrationForm}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={() => {
          console.log("");
        }}
      >
        <Form className={css.tagForm}>
            <div>
              <Field
                type="text"
                name="firstName"
                placeholder="First name"
                className={css.field}
              ></Field>
            </div>
            <div>
              <Field
                type="text"
                name="lastName"
                placeholder="Last name"
                className={css.field}
              ></Field>
            </div>
            <div>
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className={css.field}
              ></Field>
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={css.field}
              ></Field>
            </div>
          <button type="submit" className={css.btn}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
