import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";
const Contact = ({ id, name, number, onDeleteUser }) => {
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <FaUser />
        <p className={css.text}>{name}</p>
      </div>
      <div>
        <FaPhone />
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.deleteBtn} onClick={() => onDeleteUser(id)}>
        delete
      </button>
    </div>
  );
};

export default Contact;
