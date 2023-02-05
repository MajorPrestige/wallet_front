import styled from 'styled-components';
import Select from 'react-select';

import { device } from 'styles/Media.variables';

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

    border-bottom: 1px solid #e0e0e0;
    border-radius: 0;
    &:hover {
      border: none;
      outline: none;
    }

    &--is-focused {
      border: 1px solid #24cca7;
      outline: none;
    }

    &__inValid {
      border: 1px solid red;
      border-radius: 0;
    }
    &__inValid .react-select__placeholder {
      color: red;
    }
  }

  .react-select__single-value {
    color: ${props => props.theme.reverseBlack};
  }

  .react-select__indicator-separator {
    display: none;
  }
  .react-select__placeholder {
    color: #bdbdbd;
  }

  .react-select__menu {
    overflow: hidden;
    background: #000000;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    border-radius: 20px;
  }

  .react-select__menu-list {
    overflow: auto;
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
  .react-select__option--is-selected {
    background-color: rgba(30, 9, 127, 0.4);
  }
  .css-t3ipsp-control {
    box-shadow: none;
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
    border: 1px solid ${props => props.theme.reverseBlack};
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
      border: 1px solid #4a56e2;
    }

    &:hover .react-select__indicator {
      color: #4a56e2;
    }
  }
  .react-select__indicator-separator {
    display: none;
  }

  .react-select__menu-list {
    border-radius: 20px;
    overflow: auto;
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

  .react-select__option--is-selected {
    background-color: rgba(30, 9, 127, 0.4);
  }

  .react-select__indicator {
    color: ${props => props.theme.reverseBlack};
  }

  .react-select__single-value {
    color: ${props => props.theme.reverseBlack};
  }
`;
