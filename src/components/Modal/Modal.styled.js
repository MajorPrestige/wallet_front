import styled from 'styled-components';

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

  @media screen and (min-width: 768px) {
    background-color: rgba(43, 43, 43, 0.3);
  }
`;

export const ModalWindow = styled.div`
  width: 540px;
  min-height: 204px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

  @media screen and (max-width: 768px) {
    margin-top: 140px;
    width: 100vw;
    height: 100vh;
    min-height: 222px;
    border-radius: 0;
    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0);
  }
`;
