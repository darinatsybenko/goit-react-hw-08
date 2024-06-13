import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  maxCharNameValidation,
  minCharNameValidation,
} from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operation";

// import { nanoid } from "nanoid";

const contactValidationSchema = Yup.object({
  name: Yup.string()
    .min(minCharNameValidation, "Your name is too short!")
    .max(
      maxCharNameValidation,
      "Your user name must be less than ${maxCharNameValidation} characters!"
    )
    .required("Name is required!"),
  number: Yup.string()
    .min(minCharNameValidation, "Your namber is too short!")
    .max(
      maxCharNameValidation,
      "Your user number must be less than ${maxCharNameValidation} characters!"
    )
    .required("Number is required!"),
});

const formInitialValues = {
  name: "",
  number: "",
};
const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
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
              <Field type="text" name="name" className={css.formInput} />
              <ErrorMessage className={css.message} component="p" name="name" />
            </label>
            <br />
            <label>
              <span>Number</span>
              <br />
              <Field type="text" name="number" className={css.formInput} />
              <ErrorMessage
                component="p"
                name="number"
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
