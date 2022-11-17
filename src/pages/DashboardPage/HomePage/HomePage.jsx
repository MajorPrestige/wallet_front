import Balance from "components/Balance/Balance";
import Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import { Container } from "styles/Shared.styled";
import { BackgroundContainer } from "../DashboardPage.styled";

const HomePage = () => {
  return (
    <BackgroundContainer>
      <Header />
      <Container>
        <Navigation current="home" />
        <Balance />
      </Container>
    </BackgroundContainer>
  );
};

export default HomePage;
