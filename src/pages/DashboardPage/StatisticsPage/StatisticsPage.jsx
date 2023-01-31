import { useMediaQuery } from 'react-responsive';

import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Statistic from 'components/Statistic/Statistic';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

import { Container } from 'styles/Shared.styled';
import { BackgroundContainer, Flex, Wrap } from '../DashboardPage.styled';

const StatisticsPage = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <BackgroundContainer>
      <Header />
      <Container>
        <Flex>
          <Wrap>
            <Navigation current="statistics" />
            {isTablet && <Balance />}
          </Wrap>
          {isTablet && <Currency />}
        </Flex>
        <Statistic />
      </Container>
    </BackgroundContainer>
  );
};

export default StatisticsPage;
