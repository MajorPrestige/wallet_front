import styled from "styled-components";
import { device } from "styles/Media.variables";

export const BalanceContainer = styled.div`
  height: 80px;
  min-width: 280px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8px;
  padding-left: 32px;
  padding-right: 73px;
  padding-bottom: 12px;
  background-color: #ffffff;
  border-radius: 30px;

  @media ${device.tabletBefore} {
    margin-top: 12px;
  }

  @media ${device.tablet} {
    min-width: 336px;
    margin-left: 0;
    margin-right: 0;
  }
  @media ${device.desktop} {
    margin-top: 32px;
    margin-bottom: 32px;
    min-width: 395px;
  }

  & p:first-child {
    font-size: 12px;
    color: #a6a6a6;
  }

  & p:last-child {
    font-family: Poppins, Circe;
    font-size: 30px;
  }
`;
