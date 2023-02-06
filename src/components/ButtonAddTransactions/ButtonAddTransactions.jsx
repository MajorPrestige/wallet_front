import React from 'react';
import { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { useSelector } from 'react-redux';
// import { useTranslation } from "react-i18next";

import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import Modal from './../Modal/Modal';
// import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
// import { getTransactionsError } from 'redux/transactions/trans-selectors';
import AddTransactionButton from '../AddTransactionButton/AddTransactionButton.jsx';

const ButtonAddTransactions = () => {
  // const { t } = useTranslation();
  const [isModal, setIsModal] = useState(false);
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  // const transactionError = useSelector(getTransactionsError);


  const toggleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <AddTransactionButton type="button" onClick={() => toggleModal()} />

      {/* {!transactionError && !isMobile && isModal && (
        <Modal toggleModal={toggleModal} isSignIn>
          <ModalAddTransactions toggleModalCancel={toggleModal} />
        </Modal>
      )} */}
      {isModal && (
        <Modal toggleModal={toggleModal} isSignIn>
          <ModalAddTransactions toggleModalCancel={toggleModal} />
        </Modal>
      )}
      {/* {transactionError &&
        isModal && (
          <Modal toggleModal={toggleModal}>
            <ErrorMessage message={transactionError}>
              {t('btnAddTransactions')}
            </ErrorMessage>
          </Modal>
        )} */}
    </>
  );
};

export default ButtonAddTransactions;
