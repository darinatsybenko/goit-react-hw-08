import { FaPhone, FaUser } from "react-icons/fa";
const Contact = ({ id, name, number, onDeleteUser }) => {
  return (
    <div>
      <div>
        <FaUser />
        <p>{name}</p>
      </div>
      <div>
        <FaPhone />
        <p>{number}</p>
      </div>
      <button onClick={() => onDeleteUser(id)}>delete</button>
    </div>
  );
};

export default Contact;
