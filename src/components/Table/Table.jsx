import React from 'react';
import {
  Category,
  TableContainer,
  PlusSum,
  MinusSum,
  TableHead,
  Operations,
  PlusTable,
  MinusTable,
  MobileTd,
  MobileTbody,
  MobileContainer,
  MobileTrPlus,
  MobileTrMinus,
  MobileTdTitle,
  MobileTdSumPlus,
  MobileTdMinus,
} from './Table.styled';

import transactions from './transactions';
import { useMediaQuery } from 'react-responsive';

const Table = () => {
  const isntMobile = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {isntMobile && (
        <TableContainer>
          <TableHead>
            <tr>
              <Category>Date</Category>
              <Category>Type</Category>
              <Category>Category</Category>
              <Category>Comment</Category>
              <Category>Sum</Category>
              <Category>Balance</Category>
            </tr>
          </TableHead>
          <tbody>
            {transactions.map(
              ({ id, Date, Type, Category, Comment, Sum, Balance }) => (
                <tr key={id}>
                  <Operations>{Date}</Operations>
                  <Operations>{Type}</Operations>
                  <Operations>{Category}</Operations>
                  <Operations>{Comment}</Operations>
                  {Type === '+' ? (
                    <PlusSum>{Sum}</PlusSum>
                  ) : (
                    <MinusSum>{Sum}</MinusSum>
                  )}
                  <Operations>{Balance}</Operations>
                </tr>
              ),
            )}
          </tbody>
        </TableContainer>
      )}

      {!isntMobile && (
        <MobileContainer>
          {transactions.map(
            ({ id, Date, Type, Category, Comment, Sum, Balance }) =>
              Type === '+' ? (
                <PlusTable key={id}>
                  <MobileTbody>
                    <MobileTrPlus>
                      <MobileTdTitle>Date</MobileTdTitle>
                      <MobileTd>{Date}</MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Type</MobileTdTitle>
                      <MobileTd>{Type}</MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Category</MobileTdTitle>
                      <MobileTd>{Category}</MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Comment</MobileTdTitle>
                      <MobileTd>{Comment}</MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Sum</MobileTdTitle>
                      <MobileTdSumPlus>{Sum}</MobileTdSumPlus>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Balance</MobileTdTitle>
                      <MobileTd>{Balance}</MobileTd>
                    </MobileTrPlus>
                  </MobileTbody>
                </PlusTable>
              ) : (
                <MinusTable key={id}>
                  <MobileTbody>
                    <MobileTrMinus>
                      <MobileTdTitle>Date</MobileTdTitle>
                      <MobileTd>{Date}</MobileTd>
                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>Type</MobileTdTitle>
                      <MobileTd>{Type}</MobileTd>
                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>Category</MobileTdTitle>
                      <MobileTd>{Category}</MobileTd>
                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>Comment</MobileTdTitle>
                      <MobileTd>{Comment}</MobileTd>
                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>Sum</MobileTdTitle>
                      <MobileTdMinus>{Sum}</MobileTdMinus>
                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>Balance</MobileTdTitle>
                      <MobileTd>{Balance}</MobileTd>
                    </MobileTrMinus>
                  </MobileTbody>
                </MinusTable>
              ),
          )}
        </MobileContainer>
      )}
    </>
  );
};

export default Table;
