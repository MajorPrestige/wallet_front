import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  Overlay,
  ModalWindow,
  ModalClose,
  ModalWindowAddTransaction,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, children, isSignIn }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      {isSignIn ? (
        <ModalWindowAddTransaction>
          {isTablet && <ModalClose onClick={toggleModal} />}
          {children}
        </ModalWindowAddTransaction>
      ) : (
        <ModalWindow>
          <ModalClose onClick={toggleModal} />
          {children}
        </ModalWindow>
      )}
    </Overlay>,
    modalRoot,
  );
};

export default Modal;
