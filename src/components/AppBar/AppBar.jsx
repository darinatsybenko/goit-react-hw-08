import { useSelector } from "react-redux";
import { selectIsLoggeidIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import ContactsPage from "../../pages/ContactsPage";
import LoginPage from "../../pages/LoginPage";

const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggeidIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <ContactsPage /> : <LoginPage />}
    </header>
  );
};

export default AppBar;
