import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';

import {
  Overlay,
  ModalWindow,
  ModalClose,
  ModalWindowAddTransaction,
} from './ModalAddTransMobile.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalAddTransMobile = ({ toggleModal, children, isSignIn }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
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

export default ModalAddTransMobile;
