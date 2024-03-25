import Contact from "../Contact/Contact";

const ContactList = ({ users, onDeleteUser }) => {
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
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
