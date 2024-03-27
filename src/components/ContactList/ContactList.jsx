import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ users, onDeleteUser }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {users.map((user) => {
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
