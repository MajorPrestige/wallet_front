import {
  TransactionButton,
  IconLogo,
} from './AddTransactionButton.js';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const AddTransactionButton = (props) => {
  return createPortal(
    <>
      <TransactionButton {...props}>
        <IconLogo />
      </TransactionButton>
    </>,
    modalRoot,
  );
};

export default AddTransactionButton;
