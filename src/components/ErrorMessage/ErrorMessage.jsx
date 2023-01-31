import PropTypes from 'prop-types';
import {
  ErrorMessageBlock,
  ErrorMessageText,
} from './ErrorMessage.styled';
import s from './boo.module.css';

const ErrorMessage = ({ message }) => {
  return (
    <ErrorMessageBlock>
      <div className={s.booWrapper}>
        <div className={s.boo}>
          <div className={s.face} id="face"></div>
        </div>
        <div className={s.shadow}></div>
        <ErrorMessageText>{message}</ErrorMessageText>
      </div>
    </ErrorMessageBlock>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
