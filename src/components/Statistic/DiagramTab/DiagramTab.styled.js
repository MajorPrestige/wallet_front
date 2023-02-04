import styled from 'styled-components';
import { device } from 'styles/Media.variables';
import { colorText, border, shadows } from '../../../styles/Variables';

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

export const Category = styled.th`
  padding-top: 16px;
  padding-bottom: 15px;
  padding-right: 20px;
  padding-left: 20px;

  background-color: ${colorText.white};

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

export const TableRow = styled.tr`
  border-bottom: ${border.homeTabGrey};
  box-shadow: ${shadows.diagramTabShadow};  
`;

export const OperationCat = styled.td`
  padding: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  text-align: start;
  vertical-align: middle;
`;

export const OperationSum = styled.td`
  padding: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  vertical-align: middle;
  
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const CellInner = styled.div`
  display: flex;
  align-items: center;
`;

export const Square = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: ${(params) => params.color};
  
  margin-right: 16px;

  display: inline-block;
`;

export const Totals = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  display: flex;
  justify-content: space-between;
`;

export const Expense = styled.span`
  text-align: right;
  color: ${colorText.red};
`;

export const Income = styled.span`
  text-align: right;
  color: ${colorText.green};  
`;