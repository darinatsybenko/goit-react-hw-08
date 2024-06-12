import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggeidIn } from "../../redux/auth/selectors";

const getNavLinkStyle = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggeidIn);
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={getNavLinkStyle} to="/">
            HomePage
          </NavLink>
          {isLoggedIn && (
            <NavLink className={getNavLinkStyle} to="/contacts">
              Contacts
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
