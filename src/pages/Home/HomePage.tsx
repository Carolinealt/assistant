import css from "./Home.module.css";
const Home = () => {
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
          <button className={css.btnAuth}>Login</button>
        </div>
        <div className={css.register}>
          <p className={css.pIsLoggin}>
            Not register yet? Sooo... You should click the next button
          </p>
          <button className={css.btnAuth}>Register</button>
        </div>
        {/* <div className={css.navWrap}>
          <Link to={"/todo"}>todo</Link>
          <Link to={"/timer"}>timer</Link>
          <Link to={"/pomodoro"}>pomodoro</Link>
          <Link to={"/contacts"}>contacts</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
