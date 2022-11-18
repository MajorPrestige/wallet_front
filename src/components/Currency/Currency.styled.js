import styled from "styled-components";
import { device } from "styles/Media.variables";

export const Table = styled.table`
  color: #ffffff;
  border-radius: 30px;
  background: linear-gradient(#6e78e8 50px, #4a56e2 50px);

  @media ${device.tabletBefore} {
    padding-left: 20px;
    padding-right: 20px;

    margin: 0 auto;
    margin-top: 28px;
  }

  & thead {
    font-weight: 700;
    font-size: 18px;
  }

  & tbody {
    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 0.2) -5%,
      rgba(255, 255, 255, 0) 80%
    );
  }

  & th,
  td {
    padding: 15px;

    @media ${device.mobile} {
      padding-left: 20px;
      padding-right: 20px;
    }

    @media ${device.tablet} {
      padding-left: 25px;
      padding-left: 25px;
    }

    @media ${device.desktop} {
      padding-left: 35px;
      padding-right: 35px;
    }
  }
`;
