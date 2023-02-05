import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  Overlay,
  ModalWindow,
  ModalClose,
  ModalWindowAddTransaction, Container, OverlayClick, Wrapper, ModalHeader,
} from './Modal.styled';
import Header from '../Header/Header.jsx';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, children, isSignIn, InnerComponent }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    window.document.body.classList.add('scroll-lock');
    return () => window.document.body.classList.remove('scroll-lock');
  }, []);

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
    <Container className='container'>
      <Wrapper className='wrapper' isTablet={isTablet}>
        <OverlayClick className='overlayClick' onClick={onOverlayClick} />
        <Overlay className='overlay'>
          {isSignIn ? (
            <>
              {!isTablet && <ModalHeader><Header /></ModalHeader>}
              {!!InnerComponent ? <InnerComponent/> : (
                <ModalWindowAddTransaction>
                  {isTablet && <ModalClose onClick={toggleModal} />}
                  {children}
                </ModalWindowAddTransaction>
              )}
            </>
          ) : (
            <ModalWindow>
              <ModalClose onClick={toggleModal} />
              {children}
            </ModalWindow>
          )}
        </Overlay>
      </Wrapper>
    </Container>,
    modalRoot,
  );
};

export default Modal;
