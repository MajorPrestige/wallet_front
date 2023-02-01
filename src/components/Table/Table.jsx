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

import { getTransactions } from 'redux/transactions/trans-selectors';
import { fetchPaginationTransactions, fetchTransactions } from 'redux/transactions/trans-operations';
import { formatDate } from './../../helpers/formatDate';

const Table = () => {
  const isntMobile = useMediaQuery({ minWidth: 768 });
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  if (!transactions) return false;
  // console.log(transactions);
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

            <tbody>
              {transactions.length > 0 &&
                [...transactions].map(elem => (
                  <tr key={elem._id}>
                    <Operations>{formatDate(elem.date)}</Operations>
                    <Operations color={elem.type ? '#24cca7' : '#ff6596'}>
                      {elem.type ? '+' : '-'}
                    </Operations>
                    <Operations>{elem.category.name}</Operations>
                    <Operations>{elem.comment}</Operations>
                    <Operations color={elem.type ? '#24cca7' : '#ff6596'}>
                      {elem.sum}
                    </Operations>

                    <Operations>{elem.balanceAfter}</Operations>
                  </tr>
                ))}
            </tbody>
          </TableContainer>
        </Container>
      )}

      {!isntMobile && transactions.length > 0 && (
        <MobileContainer>
          {transactions.length > 0 &&
            [...transactions].map(elem =>
              elem.type === true ? (
                <PlusTable key={elem._id}>
                  <MobileTbody>
                    <MobileTrPlus>
                      <MobileTdTitle>Date</MobileTdTitle>
                      <MobileTd>{formatDate(elem.date)}</MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Type</MobileTdTitle>
                      <MobileTd color={elem.type ? '#24cca7' : '#ff6596'}>
                        {elem.type ? '+' : '-'}
                      </MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Category</MobileTdTitle>
                      <MobileTd>{elem.category.name}</MobileTd>
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
                      <MobileTd>{elem.balanceAfter}</MobileTd>
                    </MobileTrPlus>
                  </MobileTbody>
                </PlusTable>
              ) : (
                <MinusTable key={elem._id}>
                  <MobileTbody>
                    <MobileTrMinus>
                      <MobileTdTitle>Date</MobileTdTitle>
                      <MobileTd>{formatDate(elem.date)}</MobileTd>
                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>Type</MobileTdTitle>
                      <MobileTd color={elem.type ? '#24cca7' : '#ff6596'}>
                        {elem.type ? '+' : '-'}
                      </MobileTd>
                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>Category</MobileTdTitle>
                      <MobileTd>{elem.category.name}</MobileTd>
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
                      <MobileTd>{elem.balanceAfter}</MobileTd>
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
