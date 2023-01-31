import styled, { css } from 'styled-components';
import { device } from 'styles/Media.variables';

export const Container = styled.div`
  width: 100%;
  max-height: 60vh;
  margin-left: auto;
  margin-right: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: aliceblue;
    border-radius: 10px;
  }
  &&::-webkit-scrollbar-thumb {
    background-color: #c0c5f5; /* цвет бегунка */
    border-radius: 10px; /* округлось бегунка */
    border: 3px solid #c0c5f5; /* отступ вокруг бегунка */
  }
`;

export const TableContainer = styled.table`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  @media ${device.tablet} {
    width: 705px;
    max-height: 305px;
  }
  @media ${device.desktop} {
    width: 715px;
    max-height: 305px;
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
  font-weight: 700;

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

export const Operations = styled.th`
  padding: 15px;
  font-size: 16px;
  font-weight: 400;
  ${props =>
    props.red &&
    css`
      color: #ff6596;
    `}
  ${props =>
    props.green &&
    css`
      color: #24cca7;
    `}
`;

// ----------------------------------------------------
export const MobileContainer = styled.div`
  background-color: inherit;
  margin-top: 30px;
  overflow: scroll;
`;

export const PlusTable = styled.table`
  width: 100%;
  margin-bottom: 10px;
`;

export const MinusTable = styled.table`
  width: 100%;
  border-radius: 30px;
  margin-bottom: 10px;
`;

export const MobileTbody = styled.tbody``;

export const MobileTrPlus = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px 20px;
  background-color: white;

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  box-shadow: inset 4px 0px 0px #24cca7;
  border: 1px solid #dcdcdf;
`;

export const MobileTrMinus = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px 20px;
  background-color: white;

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  box-shadow: inset 4px 0px 0px 0px #ff6596;
  border: 1px solid #dcdcdf;
`;

export const MobileTdTitle = styled.td`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
`;

export const MobileTd = styled.td`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const MobileTdSumPlus = styled.td`
  color: #24cca7;
`;
export const MobileTdMinus = styled.td`
  color: #ff6596;
`;
