import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

import LoginForm from "components/Auth/LoginForm/LoginForm";
import { Title } from "styles/Shared.styled";
import { LoginImg } from "./LoginPage.styled";
import { StyledAuthForm, AuthHero } from "../AuthPage.styled";

import { getFirstLoading } from "redux/auth/auth-selectors";

import SigninTab from "images/auth/SigninAppTab.png";
import SigninTab2x from "images/auth/SigninAppTab@2x.png";
import SigninDesk from "images/auth/SigninAppDesk.png";
import SigninDesk2x from "images/auth/SigninAppDeskt@2x.png";


const LoginPage = () => {
  const isntMobile = useMediaQuery({ minWidth: 768 });
  const isFirstLoading = useSelector(getFirstLoading);

  return (
    !isFirstLoading && (
      <StyledAuthForm>
        {isntMobile && (
          <AuthHero>
            <div>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`${SigninDesk} 1x, ${SigninDesk2x} 2x`}
                  type="image/png"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${SigninTab} 1x, ${SigninTab2x} 2x`}
                  type="image/png"
                />
                <LoginImg src={SigninTab} alt="Finance App" />
              </picture>
            </div>
            <Title>Finance App</Title>
          </AuthHero>
        )}
        <LoginForm />
      </StyledAuthForm>
    )
  );
};

export default LoginPage;
