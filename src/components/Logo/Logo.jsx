import { LogoContainer, LogoHeaderContainer, LogoText } from './Logo.styled';
import { IconLogo } from './Logo.styled';
import { useTranslation } from "react-i18next";

const Logo = ({ header }) => {
  const { t } = useTranslation();
  return (
    <>
      {header ? (
        <LogoHeaderContainer to="/">
          <IconLogo />
          <LogoText>{t('wallet')}</LogoText>
        </LogoHeaderContainer>
      ) : (
        <LogoContainer>
         <IconLogo />
          <LogoText>{t('wallet')}</LogoText>
        </LogoContainer>
      )}
    </>
  );
};

export default Logo;
