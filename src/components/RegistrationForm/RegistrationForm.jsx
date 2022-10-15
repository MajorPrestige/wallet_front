import { Formik, Form, Field } from "formik";
// import { Link } from "react-router-dom";
import * as yup from "yup";

const RegistrationForm = () => {
  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(1, "at least 1 character")
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
        {({
          values,
          errors,
          touched,
          handleChange,
          isValid,
          dirty,
          handleSubmit,
        }) => (
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
              <button
                type="submit"
                // disabled={!isValid || !dirty}
                onClick={handleSubmit}
              >
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
