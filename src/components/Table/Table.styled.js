import styled from 'styled-components';
import { device } from 'styles/Media.variables';
import {
  backgroundColor,
  border,
  colorText,
  shadows,
} from './../../styles/Variables';

import { ReactComponent as Bin } from 'images/svgs/bin.svg';

export const Container = styled.div`
  width: 100%;
  margin-top: 45px;
  max-height: 71vh;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  box-shadow: ${props => {
    const { hasScroll } = props.children.props;
    return hasScroll ? shadows.tableHomeShadows : 'none';
  }};

  @media ${device.tabletOnly} {
    max-height: 50vh;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: aliceblue;

    border-radius: 10px;
  }
  &&::-webkit-scrollbar-thumb {
    background-color: ${backgroundColor.scrollbarThumb}; /* цвет бегунка */
    border-radius: 10px; /* колір бегунка */
    border: ${border.scrollbarThumb}; /* отступ вокруг бегунка */
  }
`;

export const TableContainer = styled.table`
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  border-collapse: separate;

  @media ${device.tabletOnly} {
    max-height: 305px;
    margin-top: 0px;
  }
  @media ${device.desktop} {
    width: 715px;
    max-height: 305px;
  }
`;

export const TableHead = styled.thead`
  margin-bottom: 15px;
  width: 100%;
  position: sticky;
  top: 0;
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

export const ButtonBin = styled.button`
  border: none;
  background: inherit;
  padding: 0;
  width: 24px;
  height: 24px;

  &:hover svg,
  &:focus svg {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    fill: #4a56e2;
  }
`;

export const BinIcon = styled(Bin)`
  width: 24px;
  height: 24px;
  fill: #6e78e8;
`;

export const Operations = styled.th`
  vertical-align: middle;
  padding: 15px;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.color};
  border-bottom: ${border.homeTabGrey};
  word-break: ${props => props.wordBreak};
  overflow-wrap: ${props => props.overflowWrap};
`;

export const Tbody = styled.tbody``;

// ----------------------------------------------------
export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  overflow: scroll;
  max-width: 500px;
`;

export const PlusTable = styled.table`
  width: 100%;
  margin-bottom: 10px;
`;

export const MinusTable = styled.table`
  width: 100%;
  border-radius: 30px;
  margin-bottom: 10px;
  word-break: break-all;
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
  box-shadow: inset 4px 0px 0px ${colorText.green};
  border: ${border.homeTabGrey};
`;

export const MobileTrMinus = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
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
  box-shadow: inset 4px 0px 0px 0px ${colorText.red};
  border: ${border.homeTabGrey};
`;

export const MobileTdTitle = styled.td`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  word-break: normal;

  padding-right: 10px;
`;

export const MobileTd = styled.td`
  display: flex;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: ${props => props.color};
  overflow: hidden;
`;

export const MobileTdSumPlus = styled.td`
  color: ${colorText.green};
`;
export const MobileTdMinus = styled.td`
  color: ${colorText.red};
`;
