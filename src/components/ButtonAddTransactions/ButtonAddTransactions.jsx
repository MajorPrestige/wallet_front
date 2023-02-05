import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import {
  TransactionButton,
  IconLogo,
} from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import Modal from './../Modal/Modal';
import ModalAddTransMobile from './../ModalAddTransMobile/ModalAddTransMobile';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { getTransactionsError } from 'redux/transactions/trans-selectors';


const ButtonAddTransactions = () => {
  const { t } = useTranslation();
  const [isModal, setIsModal] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const transactionError = useSelector(getTransactionsError);


  const toggleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <TransactionButton type="button" onClick={() => toggleModal()}>
        <IconLogo />
      </TransactionButton>

      {!transactionError && !isMobile && isModal && (
        <Modal toggleModal={toggleModal} isSignIn>
          <ModalAddTransactions toggleModalCancel={toggleModal} />
        </Modal>
      )}
      {!transactionError && isMobile && isModal && (
        <ModalAddTransMobile toggleModal={toggleModal} isSignIn>
          <ModalAddTransactions toggleModalCancel={toggleModal} />
        </ModalAddTransMobile>
      )}
      {transactionError && (
        <Modal toggleModal={toggleModal}>
          <ErrorMessage message={transactionError}>{t('btnAddTransactions')}</ErrorMessage>
        </Modal>
      )}
    </>
  );
};

export default ButtonAddTransactions;
