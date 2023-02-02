import styled from 'styled-components';
import Select from 'react-select';

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
