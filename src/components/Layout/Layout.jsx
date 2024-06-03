import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";
import clsx from "clsx";

const getNavLinkStyle = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={getNavLinkStyle} to="/">
            HomePage
          </NavLink>
          <NavLink className={getNavLinkStyle} to="/register">
            Register
          </NavLink>
          <NavLink className={getNavLinkStyle} to="/login">
            Log In
          </NavLink>
          <NavLink className={getNavLinkStyle} to="/contacts">
            Contacts
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
