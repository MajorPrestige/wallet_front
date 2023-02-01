import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  TransactionButton,
  IconLogo,
} from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import Modal from './../Modal/Modal';
import ModalAddTransMobile from './../ModalAddTransMobile/ModalAddTransMobile';

const ButtonAddTransactions = () => {
  const [isModal, setIsModal] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <TransactionButton type="button" onClick={() => toggleModal()}>
        <IconLogo />
      </TransactionButton>
      {!isMobile && isModal && (
        <Modal toggleModal={toggleModal} isSignIn>
          <ModalAddTransactions toggleModalCancel={toggleModal} />
        </Modal>
      )}
      {isMobile && isModal && (
        <ModalAddTransMobile toggleModal={toggleModal} isSignIn>
          <ModalAddTransactions toggleModalCancel={toggleModal} />
        </ModalAddTransMobile>
      )}
    </>
  );
};

export default ButtonAddTransactions;
