import React, { useState } from 'react';
import Logo from 'components/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getFirstName } from 'redux/auth/auth-selectors';
import { useTranslation } from "react-i18next";
import {
  HeaderContainer,
  HeaderWrapper,
  StyledHeader,
  LogoutButton,
  Logout,
} from './Header.styled';
import { LanguagesSwitcher } from 'components/LanguagesSwitcher/LanguagesSwitcher';


import ModalAnswer from 'components/ModalAnswer/ModalAnswer';
import Modal from 'components/Modal/Modal';
import { signout } from 'redux/auth/auth-operations';

const Header = () => {
  const { t } = useTranslation();
  const userName = useSelector(getFirstName);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const dispatch = useDispatch();

  const onLogoutButtonClick = () => {
    dispatch(signout());
  };

  return (
    <HeaderContainer>
      <StyledHeader>
        <LanguagesSwitcher/>
        <Logo header />
        <HeaderWrapper>
          {isMobile && (
            <>
              <p>{userName}</p>
              <LogoutButton onClick={toggleModal} type="button">
                <Logout />
              </LogoutButton>
            </>
          )}
          {isTablet && (
            <>
              <p style={{ marginRight: '8px' }}>{userName}</p>
              <LogoutButton onClick={toggleModal} tablet>
                <Logout />
                <span style={{ marginLeft: '8px' }}>{t('header.exit')}</span>
              </LogoutButton>
            </>
          )}
        </HeaderWrapper>
        {isModal && (
          <Modal toggleModal={toggleModal} isSignIn>
            <ModalAnswer
              toggleModalCancel={toggleModal}
              text={`${t('header.modalAnswer.text')}`}
              onButtonClick={onLogoutButtonClick}
            />
          </Modal>
        )}
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
