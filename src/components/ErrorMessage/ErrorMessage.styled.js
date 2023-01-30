import styled from 'styled-components';
import { device } from 'styles/Media.variables';

export const ErrorMessageBlock = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorMessageText = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #4a56e2;
  margin-top: 30px;
  max-width: 240px;

  @media ${device.tablet} {
    font-size: 22px;
    max-width: 360px;
    margin-top: 50px;
  }
`;


