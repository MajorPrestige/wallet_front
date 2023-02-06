import { LogoContainer, LogoHeaderContainer, LogoText } from './Logo.styled';
import { IconLogo } from './Logo.styled';
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';

const Logo = ({ header }) => {
  const isNotSmallMobile = useMediaQuery({ minWidth: 480 });
  const { t } = useTranslation();
  return (
    <>
      {header ? (
        <LogoHeaderContainer to="/">
          <IconLogo />
          <LogoText>{isNotSmallMobile && t('wallet')}</LogoText>
        </LogoHeaderContainer>
      ) : (
        <LogoContainer>
         <IconLogo />
          <LogoText>{isNotSmallMobile && t('wallet')}</LogoText>
        </LogoContainer>
      )}
    </>
  );
};

export default Logo;
