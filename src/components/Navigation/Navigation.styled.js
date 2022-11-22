import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "styles/Media.variables";

import { ReactComponent as Home } from "images/svgs/home.svg";
import { ReactComponent as Statistics } from "images/svgs/statistics.svg";
import { ReactComponent as Currency } from "images/svgs/currency.svg";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;

  @media ${device.tablet} {
    margin-top: 0px;
    flex-direction: column;
  }
`;

export const NavigateButton = styled(NavLink)`
  padding: 0px;
  background-color: transparent;
  border: none;
  height: 44px;
  font-family: 'Poppins';
  font-size: 18px;
  color: #000000;

  &:not(:last-child) {
    margin-right: 32px;
  }

  &:hover svg,
  &:focus svg{
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    fill: #4a56e2;
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    height: auto;

    &:not(:last-child) {
    margin-right: 0px;
    margin-bottom: 12px;
  }
  }
`;

export const NavigateText = styled.span`
  ${(props) =>
    props.current &&
    css`
      font-weight: 700;
    `}
`;

const styledIcon = css`
  fill: #6e78e8;
  transition: 0.2s ease-in-out;

  ${(props) =>
    props.current &&
    css`
      fill: #4a56e2;
    `}

    @media ${device.tablet} {
      width: 24px;
      height: 24px;
      margin-right: 20px;
    }
`;

export const StyledHomeIcon = styled(Home)`
  ${styledIcon}
`;
export const StyledStatisticsIcon = styled(Statistics)`
  ${styledIcon}
`;
export const StyledCurrencyIcon = styled(Currency)`
  ${styledIcon}
`;
