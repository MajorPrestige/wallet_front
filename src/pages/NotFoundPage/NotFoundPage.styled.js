import styled from 'styled-components';
import { device } from 'styles/Media.variables';

export const ErrorMessageText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #4a56e2;
  margin: 20px auto 20px;
  max-width: 250px;
  text-align: center;

  @media ${device.mobileTablet} {
    font-size: 18px;
    max-width: 280px;
  }
  @media ${device.mobileTablet} {
    font-size: 18px;
    max-width: 280px;
  }
  @media ${device.desktop} {
    font-size: 22px;
    max-width: 345px;
    margin-top: 50px;
  }
`;

export const ButtonWrapper = styled.div`
  line-height: 1.5;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
