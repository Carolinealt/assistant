import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import css from "./RegisterPage.module.css";
const RegisterPage = () => {
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <div className={css.headers}>
          <h1>Sign up</h1>
        </div>
      </div>
      <div className={css.containerForm}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPage;
