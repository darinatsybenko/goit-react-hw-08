import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";

const UserMenu = () => {
  const userData = useSelector(selectUserData);

  return (
    <>
      <span>Hi, {userData.name}!</span>
    </>
  );
};

export default UserMenu;
