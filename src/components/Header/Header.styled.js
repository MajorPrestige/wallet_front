import styled, { css } from 'styled-components';
import { device } from 'styles/Media.variables';
import { ReactComponent as LogoutIcon } from 'images/svgs/logout.svg';

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.bgPrimary2};
  text-align: center;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.mobileOnly} {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${device.mobile} {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.desktop} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${(props) => props.theme.txtGrey};
`;

export const Logout = styled(LogoutIcon)`
  fill: ${(props) => props.theme.txtGrey};
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  padding-left: 8px;
  transition: 0.2s ease-in-out;
  &:hover svg,  
  &:focus svg, 
  &:hover span,
  &:focus span {
    
    transform: scale(1.05);
    fill: #ff6596;
    filter: drop-shadow(0px 3px 10px rgb(255, 101, 150, 0.3));
    color:#ff6596;
    
  }
  

  ${props =>
    props.tablet &&
    css`
      font-size: 18px;
      color: ${(props) => props.theme.txtGrey};
      padding-left: 12px;
      border-left: 1px solid ${(props) => props.theme.txtGrey};
    `}
`;



