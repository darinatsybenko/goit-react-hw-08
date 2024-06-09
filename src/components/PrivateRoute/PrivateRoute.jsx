import { Navigate } from "react-router-dom";
import { selectIsLoggeidIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggeidIn);
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
