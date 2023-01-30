import styled from 'styled-components';
import { device } from 'styles/Media.variables';

export const TransactionButton = styled.button`
  width: 44px;
  height: 44px;
  background-image: linear-gradient(122deg, rgba(0, 255, 205, 0.95), #24cca7);
  transition: transform 300ms linear;
  border: none;
  border-radius: 50%;
  font-size: 30px;
  font-family: 'Montserrat';
  color: #fff;
  position: fixed;
  right: 20px;
  bottom: 20px;
  outline: none;
  cursor: pointer;
  box-shadow: rgba(0, 75, 144, 0.35) 0px 8px 10px 0px;
  &:hover {
    background-image: linear-gradient(122deg, #24cca7, rgba(0, 255, 205, 0.95));
    transform: scale(1.1);
  }

  @media ${device.tablet} {
    right: 40px;
    bottom: 20px;
    z-index: 10;
  }

  @media ${device.desktop} {
    right: 85px;
  }
`;
