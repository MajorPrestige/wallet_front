import React from 'react';
import {
  Category,
  TableContainer,
  PlusSum,
  MinusSum,
  TableHead,
  Operations,
  MobContainer,
  PlusTable,
  MinusTable,
  MobTr,
  MobTd,
  MobTbody,
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
                  <Operations>{Balance}</Operations>{' '}
                </tr>
              ),
            )}
          </tbody>
        </TableContainer>
      )}

      {!isntMobile && (
        <MobContainer>
          {transactions.map(
            ({ id, Date, Type, Category, Comment, Sum, Balance }) =>
              Type === '+' ? (
                <PlusTable key={id}>
                  <MobTbody>
                    <MobTr>
                      <MobTd>Date</MobTd>
                      <MobTd>{Date}</MobTd>
                    </MobTr>

                    <MobTr>
                      <MobTd>Type</MobTd>
                      <MobTd>{Type}</MobTd>
                    </MobTr>
                    <MobTr>
                      <MobTd>Category</MobTd>
                      <MobTd>{Category}</MobTd>
                    </MobTr>
                    <MobTr>
                      <MobTd>Comment</MobTd>
                      <MobTd>{Comment}</MobTd>
                    </MobTr>
                    <MobTr>
                      <MobTd>Sum</MobTd>
                      <MobTd>{Sum}</MobTd>
                    </MobTr>
                    <MobTr>
                      <MobTd>Balance</MobTd>
                      <MobTd>{Balance}</MobTd>
                    </MobTr>
                  </MobTbody>
                </PlusTable>
              ) : (
                <MinusTable key={id}>
                  <MobTbody>
                    <MobTr>
                      <MobTd>Date</MobTd>
                      <MobTd>{Date}</MobTd>
                    </MobTr>
                    <MobTr>
                      <MobTd>Type</MobTd>
                      <MobTd>{Type}</MobTd>
                    </MobTr>
                    <MobTr>
                      <MobTd>Category</MobTd>
                      <MobTd>{Category}</MobTd>
                    </MobTr>
                    <MobTr>
                      <MobTd>Comment</MobTd>
                      <MobTd>{Comment}</MobTd>
                    </MobTr>
                    <MobTr>
                      <MobTd>Sum</MobTd>
                      <MobTd>{Sum}</MobTd>
                    </MobTr>
                    <MobTr>
                      <MobTd>Balance</MobTd>
                      <MobTd>{Balance}</MobTd>
                    </MobTr>
                  </MobTbody>
                </MinusTable>
              ),
          )}
        </MobContainer>
      )}
    </>
  );
};

export default Table;
