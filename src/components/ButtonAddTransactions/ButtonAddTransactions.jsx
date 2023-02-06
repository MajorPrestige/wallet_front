import React from 'react';
import { useState } from 'react';

import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import Modal from './../Modal/Modal';
import AddTransactionButton from '../AddTransactionButton/AddTransactionButton.jsx';

const ButtonAddTransactions = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <AddTransactionButton type="button" onClick={() => toggleModal()} />
      {isModal && (
        <Modal toggleModal={toggleModal} isSignIn>
          <ModalAddTransactions toggleModalCancel={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default ButtonAddTransactions;
