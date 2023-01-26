import Logo from 'components/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getFirstName } from 'redux/auth/auth-selectors';
import { HeaderWrapper, StyledHeader, LogoutButton } from './Header.styled';
import { ReactComponent as Logout } from 'images/svgs/logout.svg';
import { signout } from 'redux/auth/auth-operations';

const Header = () => {
  const userName = useSelector(getFirstName);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const onLogoutButtonClick = () => {
    dispatch(signout());
  };

  return (
    <StyledHeader>
      <Logo />
      <HeaderWrapper>
        {isMobile && (
          <>
            <p>{userName}</p>
            <LogoutButton onClick={onLogoutButtonClick} type="submit">
              <Logout />
            </LogoutButton>
          </>
        )}
        {isTablet && (
          <>
            <p style={{ marginRight: '8px' }}>{userName}</p>
            <LogoutButton onClick={onLogoutButtonClick} tablet>
              <Logout />
              <span style={{ marginLeft: '8px' }}>Exit</span>
            </LogoutButton>
          </>
        )}
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
