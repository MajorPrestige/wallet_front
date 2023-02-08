import styled from 'styled-components';
import { device } from 'styles/Media.variables';
import { ReactComponent as Icon } from 'images/svgs/add.svg';
import { backgroundColor, border, shadows} from '../../styles/Variables';

export const TransactionButton = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: ${backgroundColor.green};
  transition: 0.2s ease-in-out;
  border: none;
  border-radius: 50%;
  font-size: 30px;
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 10;
  outline: none;
  cursor: pointer;
  box-shadow: ${shadows.roundButton};
  &:hover,
  &:focus {
    border:  ${border.green};
    transform: scale(1.05);
    outline: transparent;
    background-color: ${backgroundColor.white};
  }
  &:hover svg,
  &:focus svg {
    stroke: ${backgroundColor.green};
  }

  @media (${device.desktop}) {
    right: calc(50vw - 620px);
  }
`;

export const IconLogo = styled(Icon)`
  width: 20px;
  height: 20px;
  stroke: ${backgroundColor.white};
  transition: 0.2s ease-in-out;
`;
