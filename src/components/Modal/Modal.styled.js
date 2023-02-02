import styled from 'styled-components';
import { device } from 'styles/Media.variables';

import { ReactComponent as ModalCloseSvg } from 'images/svgs/modal-close.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(43, 43, 43, 0);
  z-index: 1200;
  pointer-events: none;
   @media screen and (min-width: 768px) {
    background-color: rgba(43, 43, 43, 0.3);
    pointer-events: auto;
  }
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 280px;
  min-height: 520px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

  @media ${device.mobileTablet} {
    width: 440px;
  }
  @media ${device.tablet} {
    width: 533px;
    min-height: 616px;
  }
`;

export const ModalWindowAddTransaction = styled.div`
  position: relative;
  width: 540px;
  min-height: 204px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  pointer-events: auto;
  @media screen and (max-width: 767px) {
    margin-top: 140px;
    width: 100vw;
    height: 100vh;
    min-height: 222px;
    border-radius: 0;
    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0);
  }
`;

export const ModalClose = styled(ModalCloseSvg)`
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
`;
