import styled from 'styled-components';
import { device } from 'styles/Media.variables';

export const TableContainer = styled.table`
  border-top: 30px;
  margin-top: 15px;
  width: 100%;

  @media ${device.tabletBefore} {
    margin-top: 40px;
    width: 280px;
    height: 300px;
  }

  @media ${device.tablet} {
    width: 704px;
    height: 312px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TableHead = styled.thead`
  margin-bottom: 15px;
`;

export const Category = styled.th`
  padding: 15px;
  background-color: #ffffff;
  font-size: 18px;
  margin-top: 15px;

  &:first-child {
    width: 100px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  &:last-child {
    width: 120px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const PlusSum = styled.th`
  color: #24cca7;
  align-items: center;
`;

export const MinusSum = styled.th`
  color: #ff6596;
`;

export const Operations = styled.th`
  padding: 15px;
  font-size: 16px;
  font-weight: 400;
`;
