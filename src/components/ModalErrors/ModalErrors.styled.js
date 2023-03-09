import styled, { css, keyframes } from 'styled-components';
import { device } from 'styles/Media.variables';

import { ReactComponent as ModalCloseSvg } from 'images/svgs/modal-close.svg';

const scale = keyframes`
  0% {
  transform: scale(0.5);
  }
  100% {
  transform: scale(1);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: rgba(43, 43, 43, 0.3);
  z-index: 12000;
  pointer-events: auto;

  &::-webkit-scrollbar {
  }

  @media screen and (min-width: 768px) {
  }
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-shrink: 0;
  -webkit-box-pack: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;

export const OverlayClick = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  cursor: pointer;
`;

export const Overlay = styled.div`
  position: relative;

  flex-direction: column;
  min-width: 300px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  padding: 20px;

  @media screen and (min-width: 768px) {
    display: block;
    flex-direction: row;
    height: auto;
  }
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 280px;
  min-height: 520px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

  animation: ${scale} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media (${device.mobileTablet}) {
    width: 440px;
  }

  @media (${device.tablet}) {
    width: 533px;
    min-height: 616px;
  }
`;

export const ModalClose = styled(ModalCloseSvg)`
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
  stroke: #000000;

  ${props =>
    props.dark &&
    css`
      stroke: ${props => props.theme.reverseBlack};
      fill: ${props => props.theme.reverseBlack};
    `}
`;
