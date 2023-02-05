import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

import {
  Category,
  TableContainer,
  TableHead,
  Operations,
  PlusTable,
  MinusTable,
  MobileTd,
  MobileTdStyled,
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
  OperationsStyled,
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
  const { t } = useTranslation();
  const [id, setId] = useState('');
  const currentLanguage = useSelector(state => state.language.language);
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

  const transactionsList = (e) => {
    if(currentLanguage === "ua") {
      if(e?.category?.name === 'Main expenses') {
        return "Основні витрати";
      };
      if(e?.category?.name === 'Products') {
        return "Продукти";
      };
      if(e?.category?.name === 'Car') {
        return "Автомобіль";
      };
      if(e?.category?.name === 'Self care') {
        return "Догляд за собою";
      };
      if(e?.category?.name === 'Child care') {
        return "Догляд за дітьми";
      };
      if(e?.category?.name === 'Household products') {
        return "Товари для дому";
      };
      if(e?.category?.name === 'Education') {
        return "Освіта";
      };
      if(e?.category?.name === 'Leisure') {
        return "Дозвілля";
      };
      if(e?.category?.name === 'Other expenses') {
        return "Інші витрати";
      };
      if(e?.category?.name === 'Entertainment') {
        return "Розваги";
      };
    };
    return e?.category?.name;
  };

  return (
    <>
      {noMobile && (
        <Container ref={scrollContainer}>
          <TableContainer ref={scrollBody} hasScroll={hasScroll}>
            <TableHead>
              <tr>
                <Category>{t('table.tableHead.category.date')}</Category>
                <Category>{t('table.tableHead.category.type')}</Category>
                <Category>{t('table.tableHead.category.category')}</Category>
                <Category>{t('table.tableHead.category.comment')}</Category>
                <Category>{t('table.tableHead.category.sum')}</Category>
                <Category>{t('table.tableHead.category.balance')}</Category>
                <Category>{t('table.tableHead.category.options')}</Category>
              </tr>
            </TableHead>

            <Tbody>
              {transactions.length > 0 &&
                [...transactions].map(elem => (
                  <tr key={elem._id} style={{ height: 50 }}>
                    <OperationsStyled>{formatDate(elem.date)}</OperationsStyled>
                    <Operations color={elem.type ? '#24cca7' : '#ff6596'}>
                      {elem.type ? '+' : '-'}
                    </Operations>
                    <OperationsStyled>
                    {transactionsList(elem) ?? ''}
                    </OperationsStyled>
                    <OperationsStyled
                      overflowWrap="break-word"
                      wordBreak="break-all"
                    >
                      {elem.comment}
                    </OperationsStyled>
                    <Operations color={elem.type ? '#24cca7' : '#ff6596'}>
                      {Number(elem.sum).toFixed(2)}
                    </Operations>

                    <OperationsStyled>
                      {Number(elem.balanceAfter).toFixed(2)}
                    </OperationsStyled>
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

                      <MobileTdTitle>{t('table.mobileTrPlus.mobileTdTitle.date')}</MobileTdTitle>
                      <MobileTdStyled>{formatDate(elem.date)}</MobileTdStyled>

                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>{t('table.mobileTrPlus.mobileTdTitle.type')}</MobileTdTitle>
                      <MobileTd color={elem.type ? '#24cca7' : '#ff6596'}>
                        {elem.type ? '+' : '-'}
                      </MobileTd>
                    </MobileTrPlus>
                    <MobileTrPlus>

                      <MobileTdTitle>{t('table.mobileTrPlus.mobileTdTitle.category')}</MobileTdTitle>
                      <MobileTdStyled>
                        {elem?.category?.name ?? ''}
                      </MobileTdStyled>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>{t('table.mobileTrPlus.mobileTdTitle.comment')}</MobileTdTitle>
                      <MobileTdStyled>{elem.comment}</MobileTdStyled>

                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>{t('table.mobileTrPlus.mobileTdTitle.sum')}</MobileTdTitle>
                      <MobileTdSumPlus>
                        {Number(elem.sum).toFixed(2)}
                      </MobileTdSumPlus>
                    </MobileTrPlus>
                    <MobileTrPlus>

                      <MobileTdTitle>{t('table.mobileTrPlus.mobileTdTitle.balance')}</MobileTdTitle>
                      <MobileTdStyled>

                        {Number(elem.balanceAfter).toFixed(2)}
                      </MobileTdStyled>
                    </MobileTrPlus>
                    <MobileTrPlus>
                      <MobileTdTitle>{t('table.mobileTrPlus.mobileTdTitle.options')}</MobileTdTitle>
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

                      <MobileTdTitle>{t('table.mobileTrMinus.mobileTdTitle.date')}</MobileTdTitle>
                      <MobileTdStyled>{formatDate(elem.date)}</MobileTdStyled>

                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>Type</MobileTdTitle>
                      <MobileTd color={elem.type ? '#24cca7' : '#ff6596'}>
                        {elem.type ? '+' : '-'}
                      </MobileTd>
                    </MobileTrMinus>
                    <MobileTrMinus>

                      <MobileTdTitle>{t('table.mobileTrMinus.mobileTdTitle.category')}</MobileTdTitle>
                      <MobileTdStyled>{elem.category.name}</MobileTdStyled>
                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>{t('table.mobileTrMinus.mobileTdTitle.comment')}</MobileTdTitle>
                      <MobileTdStyled>{elem.comment}</MobileTdStyled>

                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>{t('table.mobileTrMinus.mobileTdTitle.sum')}</MobileTdTitle>
                      <MobileTdMinus>{elem.sum}</MobileTdMinus>
                    </MobileTrMinus>
                    <MobileTrMinus>

                      <MobileTdTitle>{t('table.mobileTrMinus.mobileTdTitle.balance')}</MobileTdTitle>
                      <MobileTdStyled>{elem.balanceAfter}</MobileTdStyled>
                    </MobileTrMinus>
                    <MobileTrMinus>
                      <MobileTdTitle>{t('table.mobileTrMinus.mobileTdTitle.options')}</MobileTdTitle>
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
            text={`${t('table.modalAnswer')}`}
            onButtonClick={handleDelete}
          />
        </Modal>
      )}
    </>
  );
};

export default Table;
