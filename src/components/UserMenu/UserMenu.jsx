import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { useState } from "react";
import { logoutn } from "../../redux/auth/operation";

const UserMenu = () => {
  const userData = useSelector(selectUserData);
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
      <div>
        <span>Hi, {userData.name}!</span>
        <button onClick={onOpenModal} type="button">
          Logout
        </button>
      </div>
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
    </div>
  );
};

export default UserMenu;
