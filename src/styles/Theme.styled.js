import Switch from 'react-switch';
import styled from 'styled-components';

import { ReactComponent as Light } from 'images/svgs/light.svg';
import { ReactComponent as Dark } from 'images/svgs/dark.svg';

export const light = {
  title: "#000000",
};

export const dark = {
  title: '#ffffff',
};

export const ThemeSwitcher = styled(Switch)`
  border: 1px solid #e0e0e0;
  border-radius: 30px !important;
  position: absolute !important;
  bottom: 5% !important;
  left: 5% !important;
  z-index: 1000 !important;
`;

export const StyledLightIcon = styled(Light)`
  width: 24px;
  fill: #ffffff;
`;

export const StyledDarkIcon = styled(Dark)`
  width: 24px;
`;

export const CheckedHand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 0px 6px 15px #00007d;
  background-color: #00008B;
  border-radius: 50%;
  
`;

export const UncheckedHandle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 0px 6px 15px #fff59d;
  background-color: #ffff00;
  border-radius: 50%;
`;