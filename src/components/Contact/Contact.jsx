import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteUser = (contactId) => {
    // const contactId = id;
    dispatch(deleteContact(contactId));
  };
  return (
    <div>
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
