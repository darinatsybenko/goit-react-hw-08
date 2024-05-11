import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = ({ onDeleteUser }) => {
  const users = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filters);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLocaleLowerCase())
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
