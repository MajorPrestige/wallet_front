import styled from "styled-components";
import { device } from "styles/Media.variables";
import Elipse1 from "images/auth/Ellipse1.png";
import Elipse2 from "images/auth/Ellipse2.png";

export const BackgroundContainer = styled.div`
  min-height: 100vh;
  background-color: #e7eaf2;

  @media ${device.tablet} {
    background: top 0% right 0% no-repeat url(${Elipse2}),
      bottom 0% left 0% no-repeat url(${Elipse1}), #e7eaf2;
  }
`;

export const BlurContainer = styled.div`
  min-height: 100vh;

  @media ${device.tablet} {
    backdrop-filter: blur(25px);
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;

  @media ${device.tabletOnly} {
    padding-top: 32px;
    padding-bottom: 20px;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 32px;
    }
  }

  @media ${device.desktop} {
    min-height: calc(100vh - 85px);
    display: block;
    padding-right: 70px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-right: 2px solid rgba(0, 0, 0, 0.05);
  }
`;
