import clsx from "clsx";
import css from "./Home.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";

const Home = () => {
  const customLink = clsx(css.moduleLink);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <div className={css.headers}>
          <h1>Welcome</h1>
          <h3>it`s your personal assistant!</h3>
        </div>
      </div>
      <div className={css.containerNav}>
        <div className={css.login}>
          <p className={css.pIsLoggin}>Let`s</p>
          <Link to={"register"} className={clsx(customLink)}>
            Get started!
          </Link>
        </div>
        <div className={css.register}>
          <p className={css.pIsLoggin}>
            Already have an account? Cool! Sign in:
          </p>
          <Link to={"login"} className={clsx(customLink)}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
