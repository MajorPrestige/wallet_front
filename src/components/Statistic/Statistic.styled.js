import styled from "styled-components";
import { device } from "styles/Media.variables";

export const Title = styled.h1`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;

  margin-top: 40px; 
  margin-bottom: 8px; 

  @media ${device.tablet} {
    margin-top: 20px; 
    margin-bottom: 20px; 
  }

  @media ${device.desktop} {
    margin-top: 32px; 
  }
`;

export const StatisticConteiner = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 32px;
  }
`;

export const Diagram = styled.div`
  @media ${device.tablet} {
    margin-top: 40px;
  }
`;