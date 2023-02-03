import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signin } from 'redux/auth/auth-operations';

import Logo from 'components/Logo/Logo';
import Modal from 'components/Modal/Modal';
import { Button, StyledLink } from 'styles/Shared.styled';
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
} from '../Auth.styled';

import { getAuthError } from 'redux/auth/auth-selectors';
import { clearAuthError } from 'redux/auth/auth-slice';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const emailRegexp = /^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

const LoginForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(getAuthError);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(emailRegexp, 'invalid email')
      .required('Please, enter your email'),
    password: yup.string().required(`Please, enter your password`),
  });

  const onSubmit = values => {
    dispatch(signin(values));
  };

  const handleModalClose = () => {
    dispatch(clearAuthError());
  };

  return (
    <>
      <AuthContainer>
        <FormWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <Formik
            initialValues={{
              email: '',
              password: '',
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
                  {((errors.password && values.password) ||
                    touched.password) && (
                    <AuthError>{errors.password}</AuthError>
                  )}
                </StyledLabel>
                <ButtonWrapper>
                  <Button primary marginBotom="20px" type="submit">
                    SIGN IN
                  </Button>
                  <StyledLink to="/signup" outlined="true">
                    SIGN UP
                  </StyledLink>
                  {/* <a href='https://goit-wallet-back.onrender.com/api/users/google' onClick={handleGoogleClick}>
                    GOOGLE ONRENDER
                  </a>
                  <a href='http://localhost:4000/api/users/google' onClick={handleGoogleClick}>
                    GOOGLE LOCAL
                  </a> */}
                </ButtonWrapper>
              </StyledForm>
            )}
          </Formik>
        </FormWrapper>
      </AuthContainer>
      {authError && (
        <Modal toggleModal={handleModalClose} isSignIn={false}>
          <ErrorMessage message={authError}></ErrorMessage>
        </Modal>
      )}
    </>
  );
};

export default LoginForm;
