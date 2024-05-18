import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiRequestContacts } from "../../redux/contactsOps";
import { useParams } from "react-router-dom";
// import { setFilter } from "../../redux/filter/filtersSlice";

const App = () => {
  // const [users, setUsers] = useState(() => {
  //   const stringifieUsers = localStorage.getItem("users");
  //   if (!stringifieUsers) return usersContact;
  //   const parsedUsers = JSON.parse(stringifieUsers);
  //   return parsedUsers;
  // });

  // const users = useSelector((state) => state.contacts.contacts);
  // const filter = useSelector((state) => state.contacts.filters);
  const { contactId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiRequestContacts(contactId));
  }, [dispatch, contactId]);
  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(users));
  // }, [users]);
  // // const [filter, setFilter] = useState("");

  // const onChangeFilter = (event) => {
  //   const action = setFilter(event.target.value);

  //   dispatch(action);
  // };

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(filter.toLocaleLowerCase())
  // );

  // const onAddUser = (FormData) => {
  //   const finalUser = {
  //     name: FormData.userName,
  //     number: FormData.userNumber,
  //     id: nanoid(),
  //   };
  //   // setUsers([...users, finalUser]);

  //   const action = addUser(finalUser);
  //   dispatch(action);
  // };

  // const onDeleteUser = (userId) => {
  //   // setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

  //   const action = deleteUser(userId);
  //   dispatch(action);
  // };
  return (
    <div>
      <h1>
        <b className="titleMain">Phonebook </b>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </h1>
    </div>
  );
};

export default App;
