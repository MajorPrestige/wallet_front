import { ReactComponent as IconLogo } from "images/svgs/wallet.svg";
import { LogoContainer, LogoText } from "./Logo.styled";


const Logo = () => {
  return (
    <LogoContainer>
				<IconLogo/>
				<LogoText>Wallet</LogoText>
    </LogoContainer>
  );
}

export default Logo;