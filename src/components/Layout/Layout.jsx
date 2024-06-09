import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { logoutn } from "../../redux/auth/operation";
import { selectIsLoggeidIn, selectUserData } from "../../redux/auth/selectors";

const getNavLinkStyle = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
const Layout = ({ children }) => {
  const userData = useSelector(selectUserData);
  const isLoggedIn = useSelector(selectIsLoggeidIn);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutn());
  };
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={getNavLinkStyle} to="/">
            HomePage
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink className={getNavLinkStyle} to="/contacts">
                Contacts
              </NavLink>
              <div>
                <span>Hi, {userData.name}!</span>
                <button onClick={onLogout} type="button">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink className={getNavLinkStyle} to="/register">
                Register
              </NavLink>
              <NavLink className={getNavLinkStyle} to="/login">
                Log In
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
