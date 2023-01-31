import styled, { css } from 'styled-components';
import { device } from 'styles/Media.variables';

export const HeaderContainer = styled.div`
  background-color: #ffffff;
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
  color: #bdbdbd;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  padding-left: 8px;

  ${props =>
    props.tablet &&
    css`
      font-size: 18px;
      color: #bdbdbd;
      padding-left: 12px;
      border-left: 1px solid #bdbdbd;
    `}
`;
