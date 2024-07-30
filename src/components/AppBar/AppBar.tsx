import { Link } from "react-router-dom";
import css from "./AppBar.module.css";
const AppBar: React.FC = () => {
  return (
    <div className={css.barContainer}>
      <button>modal</button>
      <ul>
        <li>
          <Link to={"/todo"}>ToDo</Link>
        </li>
      </ul>
    </div>
  );
};

export default AppBar;
