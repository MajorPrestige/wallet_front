import Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import { Container } from "styles/Shared.styled";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Navigation current="home" />
      </Container>
    </>
  );
};

export default HomePage;
