import Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import Chart from "components/Chart/Chart";
import { Container } from "styles/Shared.styled";
import { BackgroundContainer } from "../DashboardPage.styled";
import { Title } from "./StatisticsPage.styled";

const StatisticsPage = () => {
  return (
    <BackgroundContainer>
      <Header />
      <Container>
        <Navigation current="statistics" />
        <Title>Statistics</Title>
        <Chart/>
      </Container>
    </BackgroundContainer>
  );
};

export default StatisticsPage;