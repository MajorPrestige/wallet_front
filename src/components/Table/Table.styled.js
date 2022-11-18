import styled from "styled-components";
import { device } from "styles/Media.variables";

export const TableContainer = styled.div`
  background-color: #ffffff;

  @media ${device.mobileOnly} {
    width: 280px;
    height: 300px;
  }

  @media ${device.tablet} {
    width: 704px;
    height: 312px;
  }

  @media ${device.tablet} {
    width: 715px;
    height: 312px;
  }
`