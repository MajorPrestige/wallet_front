import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';

import RegistrationForm from 'components/Auth/RegistrationForm/RegistrationForm';
import { StyledAuthForm, AuthHero, AuthContainer } from '../AuthPage.styled';
import { RegistrationImg } from './RegistrationPage.styled';
import { Title } from 'styles/Shared.styled';
import FinanceTab from 'images/auth/FinanceTab.png';
import FinanceTab2x from 'images/auth/FinanceTab@2x.png';
import FinanceDesk from 'images/auth/FinanceDesk.png';
import FinanceDesk2x from 'images/auth/FinanceDesk@2x.png';
import { getLoading } from 'redux/auth/auth-selectors';

const RegistrationPage = () => {
  const isntMobile = useMediaQuery({ minWidth: 768 });
  const loading = useSelector(getLoading);

  return (
    <>
      {loading && <Loader />}
      <StyledAuthForm>
        <AuthContainer>
        {isntMobile && (
          <AuthHero>
            <div>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`${FinanceDesk} 1x, ${FinanceDesk2x} 2x`}
                  type="image/png"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${FinanceTab} 1x, ${FinanceTab2x} 2x`}
                  type="image/png"
                />
                <RegistrationImg src={FinanceTab} alt="Finance App" />
              </picture>
            </div>
            <Title>Finance App</Title>
          </AuthHero>
        )}
        <RegistrationForm />
        </AuthContainer>
      </StyledAuthForm>
    </>
  );
};

export default RegistrationPage;
