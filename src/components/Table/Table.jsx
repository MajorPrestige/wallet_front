import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

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
  Tbody,
} from './Table.styled';

import { getTransactions } from 'redux/transactions/trans-selectors';
import {
  deleteTransaction,
  fetchTransactions,
} from 'redux/transactions/trans-operations';
import { formatDate } from './../../helpers/formatDate';

import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import ModalAnswer from 'components/ModalAnswer/ModalAnswer';

const Table = () => {
  const [id, setId] = useState('');

  const scrollBody = useRef();
  const scrollContainer = useRef();

  const noMobile = useMediaQuery({ minWidth: 768 });
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactions);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  useEffect(
    e => {
      setHasScroll(
        scrollBody?.current?.clientHeight >
          scrollContainer?.current?.clientHeight,
      );
    },
    [transactions],
  );

  const [isModal, setIsModal] = useState(false);

  const toggleModal = e => {
    setIsModal(!isModal);
    setId(e);
  };

  const handleDelete = close => {
    dispatch(deleteTransaction(id));
    close();
  };

  if (!transactions) return false;

  return (
    <>
      {noMobile && (
        <Container ref={scrollContainer}>
          <TableContainer ref={scrollBody} hasScroll={hasScroll}>
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

            <Tbody>
              {transactions.length > 0 &&
                [...transactions].map(elem => (
                  <tr key={elem._id} style={{ height: 50 }}>
                    <Operations>{formatDate(elem.date)}</Operations>
                    <Operations color={elem.type ? '#24cca7' : '#ff6596'}>
                      {elem.type ? '+' : '-'}
                    </Operations>
                    <Operations>{elem?.category?.name ?? ''}</Operations>
                    <Operations overflowWrap="break-word" wordBreak="break-all">
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
            </Tbody>
          </TableContainer>
        </Container>
      )}

      {!noMobile && transactions.length > 0 && (
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
          <ModalAnswer
            toggleModalCancel={toggleModal}
            elem={id}
            text={'Are you sure you want to delete transaction?'}
            onButtonClick={handleDelete}
          />
        </Modal>
      )}
    </>
  );
};

export default Table;
