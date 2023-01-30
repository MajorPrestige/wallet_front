import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select)`
  & .react-select__dropdown-indicator {
    border-color: red;
    font-size: 24px;
    color: red;
    background-color: yellow;
  }
`;
