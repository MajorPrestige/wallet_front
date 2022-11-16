import {
  StyledHomeIcon,
  StyledCurrencyIcon,
  StyledStatisticsIcon,
  ButtonWrapper,
  NavigateButton,
} from "./Navigation.styled";

const Navigation = ({ current }) => {
  return (
    <ButtonWrapper>
      <NavigateButton type="button" to='/home'>
        {current === "home" ? <StyledHomeIcon current="true" /> : <StyledHomeIcon />}
      </NavigateButton>

      <NavigateButton type="button" to='/statistics'>
        {current === "statistics" ? (
          <StyledStatisticsIcon current="true" />
        ) : (
          <StyledStatisticsIcon />
        )}
      </NavigateButton>

      <NavigateButton type="button" to='/currency'>
        {current === "currency" ? (
          <StyledCurrencyIcon current="true" />
        ) : (
          <StyledCurrencyIcon />
        )}
      </NavigateButton>
    </ButtonWrapper>
  );
};

export default Navigation;
