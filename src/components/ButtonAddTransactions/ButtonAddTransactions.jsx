import React from 'react';
import { useState } from 'react';

import { TransactionButton, IconLogo } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import Modal from './../Modal/Modal';

const ButtonAddTransactions = () => {
  const [isModal, setIsModal] = useState(false);

  const toogleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <TransactionButton type="button" onClick={() => toogleModal()}>
        <IconLogo/>
      </TransactionButton>
      {isModal && (
        <Modal toogleModal={toogleModal}>
          <ModalAddTransactions toogleModalCancel={toogleModal} />
        </Modal>
      )}
    </>
  );
};

export default ButtonAddTransactions;
