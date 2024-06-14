import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map((user) => {
          return (
            <li className={css.contactItem} key={user.id}>
              <Contact name={user.name} number={user.number} id={user.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
