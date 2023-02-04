import styled from "styled-components";
import { device } from "styles/Media.variables";
import background from "images/svgs/currency-bg.svg";

export const Container = styled.div`
  height: 174px;
  position: relative;
  width: 280px;

  color: #ffffff;
  border-radius: 30px;
  overflow: hidden;
  background: #4a56e2 url(${background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletBefore} {
    margin: 0 auto;
    margin-top: 28px;
  }

  @media ${device.tablet} {
    height: 182px;
    width: 336px;
  }

  @media ${device.desktop} {
    height: 331px;
    width: 393px;
  }
`;

export const WrapLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

export const WrapError = styled.div`
  align-items: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 18px;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  height: max-content;

  @media ${device.tabletBefore} {
    padding-left: 20px;
    padding-right: 20px;
  }

  & thead {
    font-weight: 700;
    font-size: 18px;
    background: rgba(255, 255, 255, 0.2);
  }

  & th {
    padding-bottom: 12px;
    padding-top: 12px;

    @media ${device.desktop} {
      padding-bottom: 17px;
      padding-top: 17px;
    }
  }

  & td {
    text-align: center;
    padding-top: 12px;

    @media ${device.desktop} {
      padding-bottom: 4px;
      padding-top: 20px;
    }
  }

  & th:first-child,
  td:first-child {
    padding-left: 20px;
    padding-right: 24px;

    @media ${device.tabletOnly} {
      padding-left: 20px;
      padding-right: 42px;
    }

    @media ${device.desktop} {
      padding-left: 44px;
      padding-right: 40px;
      text-align: center;
    }
  }

  & th:last-child,
  td:last-child {
    padding-right: 17px;
    padding-left: 38px;

    @media ${device.tabletOnly} {
      text-align: left;
      padding-right: 25px;
      padding-left: 70px;
    }

    @media ${device.desktop} {
      padding-right: 44px;
      padding-left: 70px;
    }
  }

  & th,
  td {
    @media ${device.tabletBefore} {
      text-align: left;
    }
  }
`;
