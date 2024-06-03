import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/errorMessage/errorMessage";
import ContactList from "../components/ContactList/ContactList";
import { isError, isLoading } from "../redux/contacts/contactsSlice";
import { apiRequestContacts } from "../redux/contactsOps";

const ContactsPage = () => {
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

export default ContactsPage;
