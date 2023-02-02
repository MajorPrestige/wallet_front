import styled from "styled-components";
import { device } from "styles/Media.variables";

export const StyledChart = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 32px;

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

  font-weight: 700;
  font-size: 18px;
`;

export const Notification = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  width: 280px;
  height: 280px;

  border: 1px solid grey;
  border-radius: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    width: 336px;
    height: 336px;
  }

  @media ${device.desktop} {
    width: 288px;
    height: 288px;
  }
`;

export const Text = styled.p`
  width: 250px;
  text-align: center;
  font-size: 18px;
`;