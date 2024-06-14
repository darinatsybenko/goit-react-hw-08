import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { useState } from "react";
import { logoutn } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onCloceModal = () => {
    setIsModalOpen(false);
  };
  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onLogout = () => {
    dispatch(logoutn(), onCloceModal());
  };
  return (
    <div>
      <div className={css.div}>
        <span className={css.span}>Hi, {userData.name}!</span>
        <button onClick={onOpenModal} type="button">
          Logout
        </button>
      </div>
      {isModalOpen && (
        <div className={css.modal}>
          <h3>Are you sure you want to log out?</h3>
          <button className={css.btn} onClick={onLogout} type="button">
            Yes
          </button>
          <button className={css.btn} onClick={onCloceModal} type="button">
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
