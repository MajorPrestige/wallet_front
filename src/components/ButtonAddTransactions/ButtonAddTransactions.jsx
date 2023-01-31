import React from 'react';
import { useState } from 'react';

import {
  TransactionButton,
  IconLogo,
} from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import Modal from './../Modal/Modal';

const ButtonAddTransactions = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <TransactionButton type="button" onClick={() => toggleModal()}>
        <IconLogo />
      </TransactionButton>
      {isModal && (
        <Modal toggleModal={toggleModal} isSignIn>
          <ModalAddTransactions toggleModalCancel={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default ButtonAddTransactions;
