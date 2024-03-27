import css from "./ContactForm.module.css";
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
    .required("Name is required!"),
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
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div>
            <label>
              <span>Name</span>
              <br />
              <Field type="text" name="userName" className={css.formInput} />
              <ErrorMessage
                className={css.message}
                component="p"
                name="userName"
              />
            </label>
            <br />
            <label>
              <span>Number</span>
              <br />
              <Field type="text" name="userNumber" className={css.formInput} />
              <ErrorMessage
                component="p"
                name="userNumber"
                className={css.message}
              />
            </label>
            <br />
            <button className={css.formBtn} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
