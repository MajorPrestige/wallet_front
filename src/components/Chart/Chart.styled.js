import styled from "styled-components";
import { device } from "styles/Media.variables";

export const StyledChart = styled.div`
  @media ${device.mobile} {
    position: relative;
    width: 280px;
    height: 280px;
    margin-right: auto;
    margin-left: auto;
  }

  @media ${device.tablet} {
    width: 336px;
    height: 336px;
    margin-left: 0;
  }

  @media ${device.desktop} {
    width: 288px;
    height: 288px;
  }
`;

export const StyledBalance = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;