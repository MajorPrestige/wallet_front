import Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import Chart from "components/Chart/Chart";
import { Container } from "styles/Shared.styled";
import { BackgroundContainer } from "../DashboardPage.styled";

const StatisticsPage = () => {
  return (
    <BackgroundContainer>
      <Header />
      <Container>
        <Navigation current="statistics" />
      </Container>
      <Chart/>
    </BackgroundContainer>
  );
};

export default StatisticsPage;