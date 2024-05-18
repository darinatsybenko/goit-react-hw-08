import axios from "axios";

export const requestAllContacts = async () => {
  const { data } = await axios.get(
    "https://6647335b51e227f23ab17aff.mockapi.io/contacts"
  );
  return data;
};
