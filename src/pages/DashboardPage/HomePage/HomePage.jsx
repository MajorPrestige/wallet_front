import Balance from "components/Balance/Balance";
import Currency from "components/Currency/Currency";
import Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import Table from "components/Table/Table";
import { Container } from "styles/Shared.styled";
import { BackgroundContainer, BlurContainer } from "../DashboardPage.styled";

const HomePage = () => {
  return (
    <BackgroundContainer>
      <BlurContainer>
        <Header />
        <Container>
          <Navigation current="home" />
          <Balance />
          <Currency />
          <Table />
        </Container>
      </BlurContainer>
    </BackgroundContainer>
  );
};

export default HomePage;
