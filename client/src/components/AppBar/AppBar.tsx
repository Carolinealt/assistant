import { Link } from "react-router-dom";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsModal, toggleMenu } from "../../redux/auth/slice";
import clsx from "clsx";
import { useDispatch } from "react-redux";
const AppBar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsModal);
  const handleModal = (b: boolean) => {
    dispatch(toggleMenu(b));
  };
  const propsModal = clsx(isOpenModal ? css["showModal"] : css["hideModal"]);
  return (
    <div className={css.barContainer}>
      <button className={css.openBar} onClick={() => handleModal(true)}>
        <svg width={10} height={10} className={css.burger}>
          <use href="public\image.svg#icon-checkmark"></use>
        </svg>
      </button>
      <div className={clsx(css.mobMenu, propsModal)}>
        <button className={css.closeBar} onClick={() => handleModal(false)}>
          <svg width={10} height={10}>
            <use href="public\image.svg#icon-cross"></use>
          </svg>
        </button>
        <ul className={css.barList}>
          <li className={css.item}>
            <Link to={"/todo"} className={css.linkBar}>
              ToDo
            </Link>
          </li>
          <li className={css.item}>
            <Link to={"/todo"} className={css.linkBar}>
              ToDo
            </Link>
          </li>
          <li className={css.item}>
            <Link to={"/todo"} className={css.linkBar}>
              ToDo
            </Link>
          </li>
          <li className={css.item}>
            <Link to={"/todo"} className={css.linkBar}>
              ToDo
            </Link>
          </li>
          <li className={css.item}>
            <Link to={"/todo"} className={css.linkBar}>
              ToDo
            </Link>
          </li>
          <li className={css.item}>
            <Link to={"/todo"} className={css.linkBar}>
              ToDo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppBar;
