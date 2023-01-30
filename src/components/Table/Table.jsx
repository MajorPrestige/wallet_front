import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
  Container,
} from './Table.styled';

import transactions from './transactions';
import { getTransactions } from 'redux/transactions/trans-selectors';
import { fetchTransactions } from 'redux/transactions/trans-operations';
import { formatDate } from './../../helpers/formatDate';

const Table = () => {
  const isntMobile = useMediaQuery({ minWidth: 768 });
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactions);
  console.log(transactions);

  useEffect(() => {
    dispatch(fetchTransactions({ page: 1, limit: 5 }));
  }, [dispatch]);

  return (
    <>
      {isntMobile && (
        <Container>
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
          </TableContainer>
          {transactions?.length ? (
            [...transactions].map(elem =>
              (
                <tbody>
                  <tr key={elem._id}>
                    <Operations>{formatDate(elem.date)}</Operations>
                    <Operations>{elem.type}</Operations>
                    <Operations>{elem.category}</Operations>
                    <Operations>{elem.comment}</Operations>
                    {elem.type === '+' ? (
                      <PlusSum>{elem.sum}</PlusSum>
                    ) : (
                      <MinusSum>{elem.sum}</MinusSum>
                    )}
                    <Operations>{elem.balance}</Operations>
                  </tr>
                </tbody>
              ).sort((a, b) => b.date - a.date),
            )
          ) : (
            <h3>У вас не має транзакций</h3>
          )}
        </Container>
      )}

      {/* <tbody>
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
            </tbody> */}

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
