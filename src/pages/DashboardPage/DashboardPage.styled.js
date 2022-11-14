import styled from "styled-components";
import { device } from "styles/Media.variables";

export const Container = styled.div`
  @media ${device.mobileOnly} {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media ${device.mobile} {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media ${device.desktop} {
    margin-left: 16px;
    margin-right: 16px;
  }

`;
