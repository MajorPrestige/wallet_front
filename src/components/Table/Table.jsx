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
  ButtonBin,
  BinIcon,
} from './Table.styled';

import { getTransactions } from 'redux/transactions/trans-selectors';
import { fetchTransactions } from 'redux/transactions/trans-operations';
import { formatDate } from './../../helpers/formatDate';

import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import ModalLogout from 'components/ModalLogout/ModalLogout';

const Table = () => {
  const [id, setId] = useState('');

  const isntMobile = useMediaQuery({ minWidth: 768 });
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const [isModal, setIsModal] = useState(false);

  const toggleModal = e => {
    setIsModal(!isModal);
    setId(e);
  };

  if (!transactions) return false;

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
                <Category>Options</Category>
              </tr>
            </TableHead>

            <tbody>
              {transactions.length > 0 &&
                [...transactions].map(elem => (
                  <tr key={elem._id} style={{ height: 50 }}>
                    <Operations>{formatDate(elem.date)}</Operations>
                    <Operations color={elem.type ? '#24cca7' : '#ff6596'}>
                      {elem.type ? '+' : '-'}
                    </Operations>
                    <Operations>{elem?.category?.name ?? ''}</Operations>
                    <Operations overflowWrap="break-word">
                      {elem.comment}
                    </Operations>
                    <Operations color={elem.type ? '#24cca7' : '#ff6596'}>
                      {Number(elem.sum).toFixed(2)}
                    </Operations>

                    <Operations>
                      {Number(elem.balanceAfter).toFixed(2)}
                    </Operations>
                    <Operations>
                      <ButtonBin
                        type="button"
                        onClick={() => toggleModal(elem._id)}
                      >
                        <BinIcon />
                      </ButtonBin>
                    </Operations>
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
                      <MobileTd>{elem?.category?.name ?? ''}</MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Comment</MobileTdTitle>
                      <MobileTd>{elem.comment}</MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Sum</MobileTdTitle>
                      <MobileTdSumPlus>
                        {Number(elem.sum).toFixed(2)}
                      </MobileTdSumPlus>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Balance</MobileTdTitle>
                      <MobileTd>
                        {Number(elem.balanceAfter).toFixed(2)}
                      </MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>Options</MobileTdTitle>
                      <MobileTd>
                        <ButtonBin
                          type="button"
                          onClick={() => toggleModal(elem._id)}
                        >
                          <BinIcon />
                        </ButtonBin>
                      </MobileTd>
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
                    <MobileTrMinus>
                      <MobileTdTitle>Options</MobileTdTitle>
                      <MobileTd>
                        <ButtonBin
                          type="button"
                          onClick={() => toggleModal(elem._id)}
                        >
                          <BinIcon />
                        </ButtonBin>
                      </MobileTd>
                    </MobileTrMinus>
                  </MobileTbody>
                </MinusTable>
              ),
            )}
        </MobileContainer>
      )}
      {isModal && (
        <Modal toggleModal={toggleModal} isSignIn>
          <ModalLogout toggleModalCancel={toggleModal} isDeleteIn elem={id} />
        </Modal>
      )}
    </>
  );
};

export default Table;
