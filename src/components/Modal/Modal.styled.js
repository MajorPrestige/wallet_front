import styled, { css, keyframes } from 'styled-components';
import { device } from 'styles/Media.variables';

import { ReactComponent as ModalCloseSvg } from 'images/svgs/modal-close.svg';

const slide = keyframes`
  0% {
  transform: translateY(-700px);
  }
  100% {
  transform: translateY(0px);
  }
`;

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
  background-color: rgba(43, 43, 43, 0);
  z-index: 12000;
  pointer-events: auto;

  &::-webkit-scrollbar {
  }

  @media screen and (min-width: 768px) {
    background-color: rgba(43, 43, 43, 0.3);
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
  padding: ${({ isTablet }) => (!isTablet ? '0' : '20px 40px')};
`;

export const Overlay = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100%;

  border-radius: 16px;

  @media screen and (min-width: 768px) {
    display: block;
    flex-direction: row;
    height: auto;
  }
`;

export const OverlayClick = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  cursor: pointer;
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 280px;
  min-height: 520px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

  /* display: flex;
  justify-content: center;
  align-items: center; */

  @media (${device.mobileTablet}) {
    width: 440px;
  }

  @media (${device.tablet}) {
    width: 533px;
    min-height: 616px;
  }
`;

export const ModalWindowAddTransaction = styled.div`
  position: relative;
  width: 540px;
  min-height: 204px;
  margin: 0;
  border-radius: 8px;
  background-color: ${props => props.theme.bgPrimary2};
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  pointer-events: auto;

  @media screen and (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100vw;
    border-radius: 0;
    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0);
    animation: ${slide} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media screen and (min-width: 768px) {
    animation: ${scale} 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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

export const ModalHeader = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  animation: none;
`;
