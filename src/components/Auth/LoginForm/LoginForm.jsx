import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signin, signinWithToken } from 'redux/auth/auth-operations';
import { useTranslation, Trans } from 'react-i18next';

import Logo from 'components/Logo/Logo';
// import Modal from 'components/Modal/Modal';
import Modal from 'components/ModalErrors/ModalErrors';
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
  EyeLogo,
  AuthError,
  ButtonWrapper,
  GoogleLogo,
  ButtonGoogle,
} from '../Auth.styled';

import { getAuthError } from 'redux/auth/auth-selectors';
import { clearAuthError } from 'redux/auth/auth-slice';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { emailRegexp } from '../../../variables/Regexp';

const LoginForm = () => {
  const [inputType, setInputType] = useState('password');
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const authError = useSelector(getAuthError);

  const token = searchParams.get('token');

  if (token) {
    dispatch(signinWithToken({ token }));
  }

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(emailRegexp, `${t('loginForm.email_matches')}`)
      .required(`${t('loginForm.email_required')}`),
    password: yup.string().required(`${t('loginForm.password_required')}`),
  });

  const onSubmit = values => {
    dispatch(signin(values));
  };

  const handleModalClose = () => {
    dispatch(clearAuthError());
  };

  const handleSetInputTypePush = () => {
    setInputType('string');
  };

  const handleSetInputTypeUp = () => {
    setInputType('password');
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
                    type={inputType}
                    placeholder={`${t('loginForm.password_placeholder')}`}
                    value={values.name}
                    required={true}
                    onChange={handleChange}
                  />
                  <PasswordLogo />
                  <EyeLogo
                    onMouseDown={handleSetInputTypePush}
                    onTouchStart={handleSetInputTypePush}
                    onMouseUp={handleSetInputTypeUp}
                    onTouchEnd={handleSetInputTypeUp}
                  />
                  {((errors.password && values.password) ||
                    touched.password) && (
                    <AuthError>{errors.password}</AuthError>
                  )}
                </StyledLabel>
                <ButtonWrapper>
                  <Button primary marginBotom="20px" type="submit">
                    {t('loginForm.signInButton')}
                  </Button>
                  <StyledLink to="/signup" outlined="true">
                    {t('loginForm.signUpButton')}
                  </StyledLink>
                  <ButtonGoogle href="https://walletback-production.up.railway.app/api/users/google">
                  {/* <ButtonGoogle href="https://wallet-back-onrender.onrender.com/api/users/google"> */}
                    <Trans i18nKey="loginForm.signInGoogle">
                      SIGN IN WITH
                      <GoogleLogo />
                      OOGLE
                    </Trans>
                  </ButtonGoogle>
                </ButtonWrapper>
              </StyledForm>
            )}
          </Formik>
        </FormWrapper>
      </AuthContainer>
      {authError && (
        <Modal toggleModal={handleModalClose} >
          <ErrorMessage message={authError}></ErrorMessage>
        </Modal>
      )}
    </>
  );
};

export default LoginForm;
