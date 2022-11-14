import Logo from "components/Logo/Logo";
import { useSelector } from "react-redux";
import { getFirstName } from "redux/auth/auth-selectors";
import { HeaderWrapper, StyledHeader } from "./Header.styled";
import { ReactComponent as Logout } from "images/svgs/logout.svg";

const Header = () => {
  const userName = useSelector(getFirstName);

  return (
    <StyledHeader>
      <Logo />
      <HeaderWrapper>
        <p style={{marginRight: "8px"}}>{userName}</p>
        <Logout />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
