import styled from 'styled-components';
import { device } from 'styles/Media.variables';
import { ReactComponent as Icon } from 'images/svgs/plus.svg';

export const TransactionButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: #24cca7;
  transition: 0.2s ease-in-out;
  border: none;
  border-radius: 50%;
  font-size: 30px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  &:hover,
  &:focus {
    border: 1px solid #24cca7;
    transform: scale(1.05);
    outline: transparent;
    color: #24cca7;
    background-color: #ffffff;
  }
  &:hover svg,
  &:focus svg {
    fill: #24cca7;
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

export const IconLogo = styled(Icon)`
  width: 20px;
  height: 20px;
  fill: #fff;
  transition: 0.2s ease-in-out;
`;
