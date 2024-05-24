import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import { isError, isLoading } from "../../redux/contacts/contactsSlice";
import ErrorMessage from "../errorMessage/errorMessage";
import { apiRequestContacts } from "../../redux/contactsOps";

// import { setFilter } from "../../redux/filter/filtersSlice";

const App = () => {
  const Loading = useSelector(isLoading);
  const Error = useSelector(isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRequestContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>
        <b className="titleMain">Phonebook </b>
        <ContactForm />
        <SearchBox />
        {Loading && <Loader />}
        {Error && <ErrorMessage />}
        <ContactList />
      </h1>
    </div>
  );
};

export default App;
