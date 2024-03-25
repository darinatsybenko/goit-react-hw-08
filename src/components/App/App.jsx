import { useState } from "react";
import usersContact from "./usersContact.json";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";
import ContactList from "../ContactList/ContactList";

const App = () => {
  const [users, setUsers] = useState(usersContact);
  const onAddUser = (FormData) => {
    const finalUser = {
      ...FormData,
      id: nanoid(),
    };
    setUsers([...users, finalUser]);
  };
  const onDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };
  return (
    <div>
      <h1>
        <b>Phonebook</b>
        <ContactForm onAddUser={onAddUser} />
        <ContactList onDeleteUser={onDeleteUser} users={usersContact} />
      </h1>
    </div>
  );
};

export default App;
