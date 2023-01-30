import { useMediaQuery } from "react-responsive";

import ButtonAddTransactions from "components/ButtonAddTransactions/ButtonAddTransactions.jsx";
import Balance from "components/Balance/Balance";
import Currency from "components/Currency/Currency";
import Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import Table from "components/Table/Table";
import { Container } from "styles/Shared.styled";
import { BackgroundContainer, BlurContainer, Flex } from "../DashboardPage.styled";

const HomePage = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  
  return (
    <BackgroundContainer>
      <BlurContainer>
        <Header />
        <Container>
          <Flex>
            <div>
              <Navigation current="home" />
              <Balance />
            </div>
            {isTablet && <Currency />}
          </Flex>
          <Table />
        </Container>
      </BlurContainer>
      <ButtonAddTransactions/>
    </BackgroundContainer>
  );
};

export default HomePage;
