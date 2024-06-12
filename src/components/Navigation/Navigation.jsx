import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutn } from "../../redux/auth/operation";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getNavLinkStyle = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
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
      {isModalOpen && (
        <div>
          <h3>Are you sure you want to log out?</h3>
          <button onClick={onLogout} type="button">
            Yes
          </button>
          <button onClick={onCloceModal} type="button">
            No
          </button>
        </div>
      )}
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={getNavLinkStyle} to="/">
            HomePage
          </NavLink>

          <NavLink className={getNavLinkStyle} to="/contacts">
            Contacts
          </NavLink>
          <button onClick={onOpenModal} type="button">
            Logout
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
