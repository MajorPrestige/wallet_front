import PropTypes from 'prop-types';
import {
  ErrorMessageBlock,
  ErrorMessageText,
} from './ErrorMessage.styled';
import s from './boo.module.css';

const ErrorMessage = ({ status }) => {
  return (
    <ErrorMessageBlock>
      <div className={s.booWrapper}>
        <div className={s.boo}>
          <div className={s.face} id="face"></div>
        </div>
        <div className={s.shadow}></div>
        <ErrorMessageText>{status}.</ErrorMessageText>
      </div>
    </ErrorMessageBlock>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  status: PropTypes.string,
};
