import styled, { css } from "styled-components";
// import { device } from "styles/Media.variables";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
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

  ${(props) =>
    props.tablet &&
    css`
      font-size: 18px;
      color: #bdbdbd;
      padding-left: 12px;
      border-left: 1px solid #bdbdbd;
    `}
`;
