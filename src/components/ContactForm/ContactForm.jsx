import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  maxCharNameValidation,
  minCharNameValidation,
} from "../../utils/constants";

const contactValidationSchema = Yup.object({
  userName: Yup.string()
    .required("Name is required")
    .min(minCharNameValidation, "Your name is too short!")
    .max(
      maxCharNameValidation,
      "Your user name must be less than ${maxCharNameValidation} characters!"
    ),
  userNamber: Yup.string()
    .required("Namber is required!")
    .min(minCharNameValidation, "Your namber is too short!")
    .max(
      maxCharNameValidation,
      "Your user namber must be less than ${maxCharNameValidation} characters!"
    ),
});

const formInitialValues = {
  userName: "",
  userNamber: "",
};
const ContactForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={contactValidationSchema}
        initialValues={formInitialValues}
        onSubmit={() => {}}
      >
        <Form onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <Field type="text" name="userName" />
          </label>
          <br />
          <label>
            <span>Namber</span>
            <Field type="text" name="userNumber" />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
