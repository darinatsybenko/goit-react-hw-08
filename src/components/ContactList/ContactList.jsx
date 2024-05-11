import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectorContacts } from "../../redux/contacts/contactsSlice";
import { selectorFilter } from "../../redux/filter/filtersSlice";

const ContactList = ({ onDeleteUser }) => {
  const selectContacts = useSelector(selectorContacts);
  const selectFilterName = useSelector(selectorFilter);

  const filteredUsers = selectContacts.filter((user) =>
    user.name.toLowerCase().includes(selectFilterName.toLocaleLowerCase())
  );

  return (
    <div>
      <ul className={css.contactList}>
        {filteredUsers.map((user) => {
          return (
            <li className={css.contactItem} key={user.id}>
              <Contact
                onDeleteUser={onDeleteUser}
                name={user.name}
                number={user.number}
                id={user.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
