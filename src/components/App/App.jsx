import { useEffect, useState } from "react";
import usersContact from "./usersContact.json";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

const App = () => {
  const [users, setUsers] = useState(() => {
    const stringifieUsers = localStorage.getItem("users");
    if (!stringifieUsers) return usersContact;
    const parsedUsers = JSON.parse(stringifieUsers);
    return parsedUsers;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const [filter, setFilter] = useState("");

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  const onAddUser = (FormData) => {
    const finalUser = {
      name: FormData.userName,
      number: FormData.userNumber,
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
        <b className="titleMain">Phonebook </b>
        <ContactForm onAddUser={onAddUser} />
        <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
        <ContactList onDeleteUser={onDeleteUser} users={filteredUsers} />
      </h1>
    </div>
  );
};

export default App;
