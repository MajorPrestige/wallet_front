import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';
import { useTranslation, Trans } from "react-i18next";

import Modal from 'components/Modal/Modal';
import Logo from 'components/Logo/Logo';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

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
  UserLogo,
  PasswordCheck,
  GoogleLogo,
  ButtonGoogle,
} from '../Auth.styled';

import { getAuthError } from 'redux/auth/auth-selectors';
import { clearAuthError } from 'redux/auth/auth-slice';
import { emailRegexp, passwordRegexp } from '../../../variables/Regexp';

// const emailRegexp = /^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

const RegistrationForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authError = useSelector(getAuthError);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(emailRegexp, `${t('registrationForm.email_matches')}`)
      .required(`${t('registrationForm.email_required')}`),
    password: yup
      .string()
      .required(`${t('registrationForm.password_required')}`)
      .min(6, `${t('registrationForm.password_min')}`)
      .max(16, `${t('registrationForm.password_max')}`)
      .matches( 
        passwordRegexp.lettersFull,
        // /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        `${t('registrationForm.password_matchesFull')}`,
      )
      .matches(
        passwordRegexp.numbers,
        // /^.*(?=.*\d).*$/, 
        `${t('registrationForm.password_matchesNum')}`),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], `${t('registrationForm.confirmPassword_oneOf')}`)
      .required(`${t('registrationForm.confirmPassword_required')}`),
    firstName: yup
      .string()
      .max(12, `${t('registrationForm.firstName_max')}`)
      .required(`${t('registrationForm.firstName_rquired')}`),
  });

  const checkPassword = password => {
    if (password) {
      if (password.length <= 16) {
        if (
          password.length > 5 &&
          (
            // /((?=.*[a-z]){1})((?=.*[A-Z]){1})/
            passwordRegexp.lettersShort.test(password) ||
            /\d/.test(password))
        ) {
          if (
            // /(?=.{6,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1})/
            passwordRegexp.strong.test(password)
          ) {
            return 'strong';
          }
          return 'normal';
        }
      }
      return 'week';
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
              confirmPassword: '',
              firstName: '',
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
                    placeholder={`${t('registrationForm.password_placeholder')}`}
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
                  {((errors.password && values.password) ||
                    touched.password) && (
                    <AuthError>{errors.password}</AuthError>
                  )}
                </StyledLabel>
                <StyledLabel>
                  <StyledField
                    name="confirmPassword"
                    type="password"
                    placeholder={`${t('registrationForm.confirmPassword_placeholder')}`}
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
                    placeholder={`${t('registrationForm.firstName_placeholder')}`}
                    value={values.name}
                    onChange={handleChange}
                  />
                  <UserLogo />
                  {(touched.firstName ||
                    (errors.firstName && values.firstName)) && (
                    <AuthError>{errors.firstName}</AuthError>
                  )}
                </StyledLabel>
                <ButtonWrapper>
                  <Button primary marginBotom="20px" type="submit">
                  {t('registrationForm.signUpButton')}
                  </Button>
                  <StyledLink to="/" outlined="true">
                  {t('registrationForm.signInButton')}
                  </StyledLink>
                  <ButtonGoogle href="https://goit-wallet-back.onrender.com/api/users/google">
                  <Trans i18nKey="registrationForm.signInGoogle">
                  SIGN IN WITH
                  <GoogleLogo />OOGLE
                  </Trans>
                  </ButtonGoogle>
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

export default RegistrationForm;
