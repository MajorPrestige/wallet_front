import styled from 'styled-components';
import { device } from 'styles/Media.variables';

export const TableContainer = styled.table`
  min-width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 336px;
  }

  @media ${device.desktop} {
    width: 395px;
  }
`;

export const TableHead = styled.thead`
  /* margin-bottom: 15px; */
`;

export const Category = styled.th`
  padding-top: 16px;
  padding-bottom: 15px;
  padding-right: 20px;
  padding-left: 20px;

  background-color: #ffffff;

  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  &:first-child {
    text-align: start;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  &:last-child {
    text-align: end;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const TableBody = styled.tbody`
  &:first-child {
    text-align: start;
  }

  &:last-child {
    text-align: end;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #DCDCDF;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);  
  &:first-child {
    text-align: start;
  }

  &:last-child {
    text-align: end;
  }
`;

// export const PlusSum = styled.th`
//   color: #24cca7;
//   align-items: center;
// `;

// export const MinusSum = styled.th`
//   color: #ff6596;
// `;

export const OperationCat = styled.th`
  padding: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  &:first-child {
    text-align: start;
  }
`;

export const OperationSum = styled.th`
padding: 20px;

font-weight: 400;
font-size: 16px;
line-height: 18px;
`;

export const Square = styled.div`
  width: 24px;
  height: 24px;
  /* background-color: black; */

  display: inline-block;
`;
