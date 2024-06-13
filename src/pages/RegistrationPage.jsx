import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  maxCharNameValidation,
  minCharNameValidation,
  minCharPasswordValidation,
} from "../utils/constants";
import css from "../components/ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operation";

const registerValidationSchema = Yup.object({
  name: Yup.string()
    .min(minCharNameValidation, "Your name is too short!")
    .max(
      maxCharNameValidation,
      "Your name must be less than ${maxCharNameValidation} characters!"
    )
    .required("Name is required!"),
  email: Yup.string()
    .min(minCharNameValidation, "Your email is too short!")
    .max(
      maxCharNameValidation,
      "Your email must be less than ${maxCharNameValidation} characters!"
    )
    .required("email is required!"),
  password: Yup.string()
    .min(
      minCharPasswordValidation,
      `Your password must be greater then ${minCharPasswordValidation} characters!`
    )
    .required("password is required!"),
});

const formInitialValues = {
  name: "",
  email: "",
  password: "",
};
const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log("values:", values);
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div>
      <h2 className={css.text}>Register user</h2>
      <Formik
        validationSchema={registerValidationSchema}
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
              <span>Email</span>
              <br />
              <Field type="email" name="email" className={css.formInput} />
              <ErrorMessage
                component="p"
                name="email"
                className={css.message}
              />
            </label>
            <br />
            <label>
              <span>Password</span>
              <br />
              <Field type="text" name="password" className={css.formInput} />
              <ErrorMessage
                component="p"
                name="password"
                className={css.message}
              />
            </label>
            <button className={css.formBtn} type="submit">
              Add new user
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
