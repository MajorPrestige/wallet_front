import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { Overlay, ModalWindow, ModalClose } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toogleModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      toogleModal();
    }
  };

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      toogleModal();
    }
  };

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalWindow>
        <ModalClose onClick={toogleModal}/>
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot,
  );
};

export default Modal;

// функция переключатель для компонента
//  в котором будет модальное окно.
// Прокинуть ее пропсом в компонент Modal
//               |
//               V

// const toogleModal = () => {
// 	setIsModal(!isModal);
// };

// добавить его в компонент в котором
//  будет модальное окно
// state для модального окна.
//               |
//               V

// const [isModal, setIsModal] = useState(false);
