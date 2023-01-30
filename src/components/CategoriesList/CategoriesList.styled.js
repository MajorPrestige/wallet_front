import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select)`
  .react-select__control {
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
  ,
  .react-select__placeholder {
    color: #bdbdbd;
  }
  ,
  .react-select__menu {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    border-radius: 20px;
  }
  ,
  .react-select__menu-list {
    color: #000000;
  }
`;
