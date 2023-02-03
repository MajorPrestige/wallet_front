import { LogoContainer, LogoHeaderContainer, LogoText } from './Logo.styled';
import { IconLogo } from './Logo.styled';

const Logo = ({ header }) => {
  return (
    <>
      {header ? (
        <LogoHeaderContainer to="/">
          <IconLogo />
          <LogoText>Wallet</LogoText>
        </LogoHeaderContainer>
      ) : (
        <LogoContainer>
          <IconLogo />
          <LogoText>Wallet</LogoText>
        </LogoContainer>
      )}
    </>
  );
};

export default Logo;
