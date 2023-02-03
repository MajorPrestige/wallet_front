import styled from 'styled-components';
import Select from 'react-select';

import { device } from "styles/Media.variables";

export const CustomSelect = styled(Select)`
  .react-select__control {
    cursor: pointer;
    width: 100%;
    border-width: 0;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .react-select__indicator-separator {
    display: none;
  }

  .react-select__menu-list {
    border-radius: 20px;
    overflow: hidden;
  }
  .react-select__placeholder {
    color: #bdbdbd;
  }

  .react-select__menu {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    border-radius: 20px;
  }

  .react-select__menu-list {
    color: #000000;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .react-select__option {
    cursor: pointer;
    font-weight: 400;
    &:hover {
      font-weight: 700;
      color: #ff6596;
      background-color: #ffffff;
    }
  }
`;

export const ChartSelect = styled(Select)`
  margin-bottom: 20px;

  @media ${device.tablet} {
    display: inline-block;
     &:first-child {
      margin-right: 16px;
      margin-bottom: 0px;
    }
  }

  @media ${device.desktop} {
    &:first-child {
      margin-right: 31px;
    }
  }

.react-select__control {
  cursor: pointer;
  border-width: 0;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;

  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 30px;

  padding-top: 8px;
  padding-right: 20px;
  padding-bottom: 14px;
  padding-left: 15px;

  width: 280px; 
  height: 50px;

  @media ${device.tablet} {
    width: 160px; 
  }

  @media ${device.desktop} {
    width: 182px; 
  }

  &:hover {
    border: 1px solid #4A56E2;
  }

  &:hover .react-select__indicator {
    color: #4A56E2;
  }
}
.react-select__indicator-separator {
  display: none;
}

.react-select__menu-list {
  border-radius: 20px;
  overflow: hidden;
}

.react-select__menu {
  background: rgba(255, 255, 255);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;

  width: 280px; 

  @media ${device.tablet} {
    width: 160px; 
  }

  @media ${device.desktop} {
    width: 182px; 
  }
}

.react-select__menu-list {
  color: #000000;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

.react-select__option {
  cursor: pointer;
  font-weight: 400;
  height: 30px;
  display: flex;
  align-items: center;

  /* &:hover {
    font-weight: 700;
    color: #ff6596;
    background-color: #ffffff;
  } */
}

.react-select__indicator {
  color: #000000;
}
`;
