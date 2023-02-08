import Switch from 'react-switch';
import styled from 'styled-components';
import { device } from 'styles/Media.variables';

import { ReactComponent as Light } from 'images/svgs/light.svg';
import { ReactComponent as Dark } from 'images/svgs/dark.svg';

export const light = {
  title: '#000000',
  bgPrimary1: '#E7EAF2',
  bgPrimary2: '#ffffff',
  bgModalBlur: 'rgba(255, 255, 255, 0.4)',
  bgModalColor: '#ffffff',
  logoColor: '#000000',
  bgblueActive: '#4A56E2',
  bgblueNoActive: '#6E78E8',
  bggreen: '#24cca7',
  bgBlurColor: 'transparrent',
  bgAuthColor: 'transparrent',
  bgscrollbarThumb: '#c0c5f5',
  reverseBlack: '#000000',
  reverseWhite: '#ffffff',
  txtgreen: '#24cca7',
  txtred: '#FF6596',
  txtblue: '#4A56E2',
  txtGrey: '#BDBDBD',
  txtbalanceGrey: '#A6A6A6',
  txtmodalMailPassword: '#e0e0e0',
};

export const dark = {
  title: '#ffffff',
  bgPrimary1: '#0d1117',
  bgPrimary2: '#25282e',
  bgModalBlur: 'rgba(0, 0, 0, 0.4)',
  bgModalColor: '#25282e',
  logoColor: '#ffffff',
  bgblueActive: '#4A56E2',
  bgblueNoActive: '#6E78E8',
  bggreen: '#24cca7',
  bgBlurColor: 'rgba(0, 0, 0, 0.7)',
  bgAuthColor: 'rgba(0, 0, 0, 0.4)',
  bgscrollbarThumb: '#c0c5f5',
  reverseBlack: '#ffffff',
  reverseWhite: '#000000',
  txtgreen: '#24cca7',
  txtred: '#FF6596',
  txtblue: '#4A56E2',
  txtGrey: '#ffffff',
  txtbalanceGrey: '#A6A6A6',
  txtmodalMailPassword: '#ffffff',
};

export const ThemeSwitcher = styled(Switch)`
  border: 1px solid #e0e0e0;
  border-radius: 30px !important;
  position: fixed !important;
  bottom: 5% !important;
  left: 5% !important;
  z-index: 1000 !important;
  opacity: 0.5 !important;

  &:hover,
  &:focus {
    opacity: 1 !important;
  }

  opacity: 0.5 !important;

  @media ${device.desktop} {
    left: calc(50vw - 620px) !important;
  }
`;

export const StyledLightIcon = styled(Light)`
  width: 24px;
`;

export const StyledDarkIcon = styled(Dark)`
  width: 24px;
  fill: #ffffff;
`;

export const CheckedHand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 0px 6px 15px #fff59d;
  background-color: #ffff00;
  border-radius: 50%;
`;

export const UncheckedHandle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0px 6px 15px #00007d;
  background-color: #00008b;
`;
