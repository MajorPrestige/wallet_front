import styled from 'styled-components';
import { device } from 'styles/Media.variables';

export const ErrorMessageText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #4a56e2;
  margin: 30px auto;
  max-width: 240px;

  @media ${device.tablet} {
    font-size: 22px;
    max-width: 360px;
    margin-top: 50px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
