import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from 'images/svgs/wallet.svg';
import { device } from 'styles/Media.variables';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoHeaderContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

export const IconLogo = styled(Icon)`
  width: 30px;
  height: 30px;

  @media ${device.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.p`
  font-family: 'Poppins';
  font-weight: 700;
  color: ${(props) => props.theme.logoColor};

  @media ${device.tabletBefore} {
    font-size: 22px;
    margin-left: 15px;
  }

  @media ${device.tablet} {
    font-size: 30px;
    margin-left: 20px;
  }
`;
