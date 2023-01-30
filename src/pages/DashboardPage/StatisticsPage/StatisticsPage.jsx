import Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import Statistic from "components/Statistic/Statistic";

import { Container } from "styles/Shared.styled";
import { BackgroundContainer } from "../DashboardPage.styled";

const StatisticsPage = () => {
  return (
    <BackgroundContainer>
      <Header />
      <Container>
        <Navigation current="statistics" />
        <Statistic/>
      </Container>
    </BackgroundContainer>
  );
};

export default StatisticsPage;