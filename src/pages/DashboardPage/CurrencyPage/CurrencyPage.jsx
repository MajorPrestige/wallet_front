import Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import { Container } from "styles/Shared.styled";
import { BackgroundContainer } from "../DashboardPage.styled";

const CurrencyPage = () => {
  return (
    <BackgroundContainer>
      <Header />
      <Container>
        <Navigation current="currency" />
      </Container>
    </BackgroundContainer>
  );
}

export default CurrencyPage;