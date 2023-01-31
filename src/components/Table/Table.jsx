import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  Category,
  TableContainer,
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
                      <Operations green>{elem.sum}</Operations>
                    ) : (
                      <Operations red>{elem.sum}</Operations>
                    )}
                    <Operations>{elem.balance}</Operations>
                  </tr>
                </tbody>
              ).sort((a, b) => b.date - a.date),
            )
          ) : (
            <h2 style={{ textAlign: 'center', color: 'red' }}>
              Sorry you don't have transactions
            </h2>
          )}
        </Container>
      )}

      {!isntMobile &&
        (transactions.length > 0 ? (
          <MobileContainer>
            {transactions
              .sort((a, b) => b.date - a.date)
              .map(elem =>
                elem.type === '+' ? (
                  <PlusTable key={elem._id}>
                    <MobileTbody>
                      <MobileTrPlus>
                        <MobileTdTitle>Date</MobileTdTitle>
                        <MobileTd>{formatDate(elem.date)}</MobileTd>
                      </MobileTrPlus>
                      <MobileTrPlus>
                        <MobileTdTitle>Type</MobileTdTitle>
                        <MobileTd>{elem.type}</MobileTd>
                      </MobileTrPlus>
                      <MobileTrPlus>
                        <MobileTdTitle>Category</MobileTdTitle>
                        <MobileTd>{elem.category}</MobileTd>
                      </MobileTrPlus>
                      <MobileTrPlus>
                        <MobileTdTitle>Comment</MobileTdTitle>
                        <MobileTd>{elem.comment}</MobileTd>
                      </MobileTrPlus>
                      <MobileTrPlus>
                        <MobileTdTitle>Sum</MobileTdTitle>
                        <MobileTdSumPlus>{elem.sum}</MobileTdSumPlus>
                      </MobileTrPlus>
                      <MobileTrPlus>
                        <MobileTdTitle>Balance</MobileTdTitle>
                        <MobileTd>{elem.balance}</MobileTd>
                      </MobileTrPlus>
                    </MobileTbody>
                  </PlusTable>
                ) : (
                  <MinusTable key={elem._id}>
                    <MobileTbody>
                      <MobileTrMinus>
                        <MobileTdTitle>Date</MobileTdTitle>
                        <MobileTd>{Date}</MobileTd>
                      </MobileTrMinus>
                      <MobileTrMinus>
                        <MobileTdTitle>Type</MobileTdTitle>
                        <MobileTd>{elem.type}</MobileTd>
                      </MobileTrMinus>
                      <MobileTrMinus>
                        <MobileTdTitle>Category</MobileTdTitle>
                        <MobileTd>{elem.category}</MobileTd>
                      </MobileTrMinus>
                      <MobileTrMinus>
                        <MobileTdTitle>Comment</MobileTdTitle>
                        <MobileTd>{elem.comment}</MobileTd>
                      </MobileTrMinus>
                      <MobileTrMinus>
                        <MobileTdTitle>Sum</MobileTdTitle>
                        <MobileTdMinus>{elem.sum}</MobileTdMinus>
                      </MobileTrMinus>
                      <MobileTrMinus>
                        <MobileTdTitle>Balance</MobileTdTitle>
                        <MobileTd>{elem.balance}</MobileTd>
                      </MobileTrMinus>
                    </MobileTbody>
                  </MinusTable>
                ),
              )}
          </MobileContainer>
        ) : (
          <h2 style={{ textAlign: 'center', color: 'red' }}>
            Sorry you don't have transactions
          </h2>
        ))}
    </>
  );
};

export default Table;
