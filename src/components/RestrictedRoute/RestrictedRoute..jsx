import { Navigate } from "react-router-dom";
import { selectIsLoggeidIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggeidIn);
  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
};

export default RestrictedRoute;
