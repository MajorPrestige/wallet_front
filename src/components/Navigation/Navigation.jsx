import { useMediaQuery } from "react-responsive";

import {
  StyledHomeIcon,
  StyledCurrencyIcon,
  StyledStatisticsIcon,
  ButtonWrapper,
  NavigateButton,
  NavigateText,
} from "./Navigation.styled";

const Navigation = ({ current }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <ButtonWrapper>
      <NavigateButton type="button" to="/home">
        {current === "home" ? <StyledHomeIcon current="true" /> : <StyledHomeIcon />}
        {isTablet ? (
          current === "home" ? (
            <NavigateText current="true">Home</NavigateText>
          ) : (
            <NavigateText>Home</NavigateText>
          )
        ) : null}
      </NavigateButton>

      <NavigateButton type="button" to="/statistics">
        {current === "statistics" ? (
          <StyledStatisticsIcon current="true" />
        ) : (
          <StyledStatisticsIcon />
        )}

        {isTablet ? (
          current === "statistics" ? (
            <NavigateText current="true">Statistics</NavigateText>
          ) : (
            <NavigateText>Statistics</NavigateText>
          )
        ) : null}
      </NavigateButton>

      {!isTablet && (
        <NavigateButton type="button" to="/currency">
          {current === "currency" ? (
            <StyledCurrencyIcon current="true" />
          ) : (
            <StyledCurrencyIcon />
          )}
        </NavigateButton>
      )}
    </ButtonWrapper>
  );
};

export default Navigation;
