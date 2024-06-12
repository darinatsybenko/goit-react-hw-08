import { NavLink } from "react-router-dom";

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
