import { useMediaQuery } from 'react-responsive';

import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions.jsx';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Table from 'components/Table/Table';
import { Container } from 'styles/Shared.styled';
import {
  BackgroundContainer,
  BlurContainer,
  Flex,
  Wrap,
} from '../DashboardPage.styled';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getLoading } from 'redux/transactions/trans-selectors';

const HomePage = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isLoading = useSelector(getLoading);

  return (
    <BackgroundContainer>
      {isLoading && <Loader />}
      <BlurContainer>
        <Header />
        <Container>
          <Flex>
            <Wrap>
              <Navigation current="home" />
              <Balance />
            </Wrap>
            {isTablet && <Currency />}
          </Flex>
          <Table />
          <ButtonAddTransactions />
        </Container>
      </BlurContainer>
    </BackgroundContainer>
  );
};

export default HomePage;
