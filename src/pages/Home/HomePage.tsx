import React from "react";
import { Link } from "react-router-dom";
import css from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to </p>
      <div className={css.navWrap}>
        <Link to={"/todo"}>todo</Link>
        <Link to={"/timer"}>timer</Link>
        <Link to={"/pomodoro"}>pomodoro</Link>
        <Link to={"/contacts"}>contacts</Link>
      </div>
    </div>
  );
};

export default Home;
