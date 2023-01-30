import React, { useState } from 'react';
import Logo from 'components/Logo/Logo';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getFirstName } from 'redux/auth/auth-selectors';
import { HeaderWrapper, StyledHeader, LogoutButton } from './Header.styled';
import { ReactComponent as Logout } from 'images/svgs/logout.svg';

import ModalLogout from 'components/ModalLogout/ModalLogout';
import Modal from 'components/Modal/Modal';

const Header = () => {
  const userName = useSelector(getFirstName);
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const [isModal, setIsModal] = useState(false);

  const toogleModal = () => {
    setIsModal(!isModal);
  }; 

  return (
    <StyledHeader>
      <Logo />
      <HeaderWrapper>
        {isMobile && (
          <>
            <p>{userName}</p>
            <LogoutButton onClick={toogleModal} type="button">
              <Logout />
            </LogoutButton>
          </>
        )}
        {isTablet && (
          <>
            <p style={{ marginRight: '8px' }}>{userName}</p>
            <LogoutButton onClick={toogleModal} tablet>
              <Logout />
              <span style={{ marginLeft: '8px' }}>Exit</span>
            </LogoutButton>
          </>
        )}
      </HeaderWrapper>
      {isModal && (
        <Modal toogleModal={toogleModal}>
          <ModalLogout toogleModalCancel={toogleModal}/>
        </Modal>
      )}
    </StyledHeader>
  );
};

export default Header;
