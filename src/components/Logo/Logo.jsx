import { LogoContainer, LogoText } from "./Logo.styled";
import { IconLogo } from "./Logo.styled";


const Logo = () => {
  return (
    <LogoContainer>
				<IconLogo/>
				<LogoText>Wallet</LogoText>
    </LogoContainer>
  );
};

export default Logo;