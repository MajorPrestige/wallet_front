import React from 'react';
import { ErrorMessageText, ButtonWrapper } from './NotFoundPage.styled';
import { StyledLink } from 'styles/Shared.styled';
import s from '../../components/ErrorMessage/boo.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.booWrapper}>
      <div className={s.boo}>
        <div className={s.face} id="face"></div>
      </div>
      <div className={s.shadow}></div>

      <ErrorMessageText>
        Ah, the dreaded <b>404</b>. Let's get you back on track
      </ErrorMessageText>

      <ButtonWrapper>
        <StyledLink primary="true" to={`/`}>
          HOME PAGE
        </StyledLink>
      </ButtonWrapper>
    </div>
  );
};

export default NotFoundPage;
