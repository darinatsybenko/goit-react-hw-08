import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  maxCharNameValidation,
  minCharNameValidation,
} from "../../utils/constants";

const contactValidationSchema = Yup.object({
  userName: Yup.string()
    .min(minCharNameValidation, "Your name is too short!")
    .max(
      maxCharNameValidation,
      "Your user name must be less than ${maxCharNameValidation} characters!"
    )
    .required("Name is required"),
  userNumber: Yup.string()
    .min(minCharNameValidation, "Your namber is too short!")
    .max(
      maxCharNameValidation,
      "Your user number must be less than ${maxCharNameValidation} characters!"
    )
    .required("Number is required!"),
});

const formInitialValues = {
  userName: "",
  userNumber: "",
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
      >
        <Form onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <Field type="text" name="userName" />
            <ErrorMessage name="userName" />
          </label>
          <br />
          <label>
            <span>Number</span>
            <Field type="text" name="userNumber" />
            <ErrorMessage name="userNumber" />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
