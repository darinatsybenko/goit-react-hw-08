import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";
const NavLinkStyle = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
const AuthNav = () => {
  return (
    <div>
      <NavLink className={NavLinkStyle} to="/register">
        Register
      </NavLink>
      <NavLink className={NavLinkStyle} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
