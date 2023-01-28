import styled from 'styled-components';
import { device } from 'styles/Media.variables';

export const TableContainer = styled.table`
  margin-top: 15px;
  margin-bottom: 15px;

  @media ${device.tablet} {
    width: 715px;
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

// ----------------------------------------------------

export const MobContainer = styled.div`
  margin-top: 15px;
`;

export const PlusTable = styled.table`
  width: 100%;
  margin-bottom: 10px;
  border: black;
`;

export const MinusTable = styled.table`
  width: 100%;
  margin-bottom: 10px;
`;

export const MobTbody = styled.tbody`
  background: inherit;
`;

export const MobTr = styled.tr`
  display: flex;

  height: 50px;
  justify-content: space-between;
  width: 100%;
  background: white;
  :last-child {
    border-bottom-left-radius: 20px;
    box-shadow: inset 4px 0px 0px red;
  }
  box-shadow: inset 1px 0px green;
  /* сделать бордер */
`;

export const MobTd = styled.td`
  padding: 12px 20px;

  height: 100%;
`;
