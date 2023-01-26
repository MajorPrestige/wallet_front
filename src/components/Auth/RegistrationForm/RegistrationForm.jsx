import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { signup } from "redux/auth/auth-operations";

import Logo from "components/Logo/Logo";
import { Button, StyledLink } from "styles/Shared.styled";
import {
  AuthContainer,
  LogoWrapper,
  FormWrapper,
  StyledForm,
  StyledLabel,
  StyledField,
  EmailLogo,
  PasswordLogo,
  AuthError,
  ButtonWrapper,
  UserLogo,
  PasswordCheck,
} from "../Auth.styled";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("Please, enter your email"),
    password: yup
      .string()
      .required(`Please, enter your password`)
      .min(6, "At least 6 characters")
      .max(16, "Up to 16 characters")
      .matches(
        /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "At least one uppercase and lowercase",
      )
      .matches(/^.*(?=.*\d).*$/, "At least one number"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match.")
      .required(`Please, confirm your password`),
    firstName: yup
      .string()
      .max(12, "up to 12 characters")
      .required(`Please, enter your name`),
  });

  const checkPassword = (password) => {
    if (password) {
      if (password.length <= 16) {
        if (
          password.length > 5 &&
          (/((?=.*[a-z]){1})((?=.*[A-Z]){1})/.test(password) || /\d/.test(password))
        ) {
          if (/(?=.{6,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1})/.test(password)) {
            return "strong";
          }
          return "normal";
        }
      }
      return "week";
    }
  };

  const onSubmit = ({ firstName, email, password }) => {
    const value = {
      name: firstName,
      email,
      password,
    };

    dispatch(signup(value));
  };

  return (
    <AuthContainer>
      <FormWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>
                <StyledField
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  value={values.name}
                  onChange={handleChange}
                />
                <EmailLogo />
                {touched.email && errors.email && (
                  <AuthError>{errors.email}</AuthError>
                )}
              </StyledLabel>
              <StyledLabel>
                <StyledField
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.name}
                  required={true}
                  onChange={handleChange}
                />
                <PasswordLogo />
                {values.password && (
                  <PasswordCheck security={checkPassword(values.password)}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </PasswordCheck>
                )}
                {((errors.password && values.password) || touched.password) && (
                  <AuthError>{errors.password}</AuthError>
                )}
              </StyledLabel>
              <StyledLabel>
                <StyledField
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={values.name}
                  onChange={handleChange}
                />
                <PasswordLogo />
                {touched.confirmPassword && errors.confirmPassword && (
                  <AuthError>{errors.confirmPassword}</AuthError>
                )}
              </StyledLabel>
              <StyledLabel>
                <StyledField
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={values.name}
                  onChange={handleChange}
                />
                <UserLogo />
                {(touched.firstName || (errors.firstName && values.firstName)) && (
                  <AuthError>{errors.firstName}</AuthError>
                )}
              </StyledLabel>
              <ButtonWrapper>
                <Button
                  primary
                  marginBotom="20px"
                  type="submit"
                >
                  SIGN UP
                </Button>
                <StyledLink to="/" outlined="true">
                  SIGN IN
                </StyledLink>
              </ButtonWrapper>
            </StyledForm>
          )}
        </Formik>
      </FormWrapper>
    </AuthContainer>
  );
};

export default RegistrationForm;
