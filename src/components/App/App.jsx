import { useState } from "react";
import usersContact from "./usersContact.json";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";

const App = () => {
  const [users, setUsers] = useState(usersContact);
  const onAddUser = (FormData) => {
    const finalUser = {
      ...FormData,
      id: nanoid(),
    };
    setUsers([...users, finalUser]);
  };
  return (
    <div>
      <h1>
        <b>Phonebook</b>
        <ContactForm onAddUser={onAddUser} />
      </h1>
    </div>
  );
};

export default App;
