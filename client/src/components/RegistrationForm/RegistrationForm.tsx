import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { UserSignUpData } from "../../types";
import { AppDispatch } from "../../redux/store";
// import css from 'RegistrationForm.module.css';
const RegistrationForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={css.regіstrationForm}>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={(e) => {
          const uData: UserSignUpData = {
            name: e.firstName,
            email: e.email,
            password: e.password,
          };
          dispatch(registerUser(uData));
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
              type="email"
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
