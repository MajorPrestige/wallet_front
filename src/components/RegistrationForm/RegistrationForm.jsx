import { Formik, Form, Field } from "formik";
// import { Link } from "react-router-dom";
import * as yup from "yup";

const RegistrationForm = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('Please, enter your email'),
    password: yup
      .string()
      .required(`Please, enter your password`)
      .min(6, "At least 6 characters")
      .max(12, "up to 12 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match.")
      .required(`Please, confirm your password`),
    firstName: yup
      .string()
      .max(12, "up to 12 characters")
      .required(`Please, enter your name`),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
        }}
        validateOnChange
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form>
            <label>
              Email
              <Field
                name="email"
                type="email"
                placeholder="E-mail"
                value={values.name}
                onChange={handleChange}
              />
              {touched.email && errors.email && <p>{errors.email}</p>}
            </label>
            <label>
              Password
              <Field
                name="password"
                type="password"
                placeholder="Password"
                value={values.name}
                required={true}
                onChange={handleChange}
              />
              {touched.password && errors.password && <p>{errors.password}</p>}
            </label>
            <label>
              Confirm password
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={values.name}
                onChange={handleChange}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p>{errors.confirmPassword}</p>
              )}
            </label>
            <label>
              First name
              <Field
                name="firstName"
                type="text"
                placeholder="First name"
                value={values.name}
                onChange={handleChange}
              />
              {touched.firstName && errors.firstName && (
                <p>{errors.firstName}</p>
              )}
            </label>
            <div>
              <button type="submit" onClick={handleSubmit}>
                REGISTER
              </button>
              {/* <Link></Link> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
