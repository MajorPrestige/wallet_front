import { Navigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Currency from "components/Currency/Currency";
import Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import { Container } from "styles/Shared.styled";
import { BackgroundContainer } from "../DashboardPage.styled";

const CurrencyPage = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  if (isTablet) {
    return <Navigate to="/home" replace="true"/>;
  }

  return (
    <BackgroundContainer>
      <Header />
      <Container>
        <Navigation current="currency" />
        <Currency />
      </Container>
    </BackgroundContainer>
  );
};

export default CurrencyPage;
