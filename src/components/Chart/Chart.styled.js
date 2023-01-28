import styled from "styled-components";
import { device } from "styles/Media.variables";

export const StyledChart = styled.div`
  @media ${device.tabletBefore} {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${device.desktopBefore} {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.desktop} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;