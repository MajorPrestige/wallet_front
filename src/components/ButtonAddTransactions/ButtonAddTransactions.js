import styled from 'styled-components';
import { device } from 'styles/Media.variables';
import { ReactComponent as Icon } from 'images/svgs/add.svg';

export const TransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: #24cca7;
  transition: 0.2s ease-in-out;
  border: none;
  border-radius: 50%;
  font-size: 30px;
  position: absolute;
  right: 20px;
  top: 444px;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  &:hover,
  &:focus {
    border: 1px solid #24cca7;
    transform: scale(1.05);
    outline: transparent;
    
    background-color: #ffffff;
  }
  &:hover svg,
  &:focus svg {
    stroke: #24cca7;
    fill: #24cca7;
  }

  @media ${device.tablet} {
    right: 40px;
    bottom: 40px;
    z-index: 10;
  }

  @media ${device.desktop} {
    top: 556px;
  }
`;

export const IconLogo = styled(Icon)`
  width: 20px;
  height: 20px;
  stroke: #fff;
  transition: 0.2s ease-in-out;
`;
