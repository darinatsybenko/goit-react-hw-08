import axios from "axios";
axios.defaults.baseURL = "https://6647335b51e227f23ab17aff.mockapi.io";

export const getContacts = async () => {
  const { data } = await axios.get("contacts");
  return data;
};

export const postContact = async (contact) => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};
export const getDeleteContact = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
