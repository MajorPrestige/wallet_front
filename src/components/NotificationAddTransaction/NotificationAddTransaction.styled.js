import styled from 'styled-components';
import { device } from 'styles/Media.variables';

export const Container = styled.div`
  position: fixed;
  right: 5%;
  bottom: 15%;
  padding: 20px;

  width: 280px;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
  background-color: ${props => props.theme.bgPrimary2};

  &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        right: 5%;

        width: 2px;
        height: -0;

        border: 8px solid transparent;
        border-top: 8px solid ${props => props.theme.bgPrimary2};
        border-bottom: none;
        box-sizing: content-box;
    }

  @media ${device.desktop} {
    right: calc(50vw - 620px);
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;

  color: ${props => props.theme.reverseBlack};
`;
