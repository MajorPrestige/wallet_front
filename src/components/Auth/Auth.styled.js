import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import { device } from 'styles/Media.variables';

import { ReactComponent as Email } from 'images/svgs/email.svg';
import { ReactComponent as Password } from 'images/svgs/password.svg';
import { ReactComponent as User } from 'images/svgs/user.svg';
import { ReactComponent as Google } from 'images/svgs/google.svg';
import { ReactComponent as Eye } from 'images/svgs/eye.svg';

export const AuthContainer = styled.div`
  @media ${device.tabletBefore} {
    height: 100vh;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${device.tabletOnly} {
    padding-bottom: 48px;
  }

  @media ${device.desktop} {
    width: 100vw;
    min-height: 100vh;
    padding: 52px 91px 52px 107px;
    display: flex;
    background: ${props => props.theme.bgModalBlur};
    backdrop-filter: blur(25px);
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  background-color: ${props => props.theme.bgModalColor};
  margin: auto;

  @media ${device.tabletBefore} {
    background-color: ${props => props.theme.bgPrimary2};
    padding-top: 32px;
    padding-bottom: 32px;
    max-width: 320px;
  }

  @media ${device.tablet} {
    width: 533px;
    padding: 40px 58px 62px 65px;
    border-radius: 20px;
  }
`;

export const StyledForm = styled(Form)`
  text-align: center;
  margin-top: 60px;
`;

export const StyledLabel = styled.label`
  position: relative;
  display: block;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding-left: 55px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.txtmodalMailPassword};
  font-size: 18px;
  outline: none;
  transition: 0.2s ease-in-out;
  background-color: ${props => props.theme.bgModalColor};
  color: ${props => props.theme.reverseBlack};

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    border-color: #24cca7;
  }

  &:focus + svg {
    fill: #24cca7;
  }

  @media ${device.tabletBefore} {
    background-color: ${props => props.theme.bgPrimary2};
  }
`;

export const EmailLogo = styled(Email)`
  position: absolute;
  top: 0;
  left: 10px;
  fill: ${props => props.theme.txtmodalMailPassword};
`;

export const PasswordLogo = styled(Password)`
  position: absolute;
  top: 0;
  left: 10px;
  fill: ${props => props.theme.txtmodalMailPassword};
`;

export const EyeLogo = styled(Eye)`
  position: absolute;
  cursor: pointer;
  width: 24px;
  height: 24px;
  top: 0;
  right: 10px;
  fill: #e0e0e0;

  &:active {
    fill: #24cca7;
  }
`;

export const AuthError = styled.p`
  position: absolute;
  font-size: 12px;
  margin-left: 10px;
  margin-top: 2px;
  color: #ff6596;
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserLogo = styled(User)`
  position: absolute;
  top: 0;
  left: 10px;
  fill: #e0e0e0;
`;

export const PasswordCheck = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;

  & span {
    margin-top: 5px;
    background-color: #e5f1ef;
    height: 2px;
    box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);
  }

  ${({ security }) =>
    security === 'week' &&
    css`
      & :nth-child(1) {
        background-color: #ed4e50;
      }
    `}

  ${({ security }) =>
    security === 'normal' &&
    css`
      & :nth-child(1),
      & :nth-child(2) {
        background-color: #ffd33d;
      }
    `}

	${({ security }) =>
    security === 'strong' &&
    css`
      & :nth-child(n) {
        background-color: #24cca7;
      }
    `}
`;

export const ButtonGoogle = styled.a`
  font-family: 'Circe';
  position: relative;
  width: 280px;
  display: flex;
  text-align: baseline;
  justify-content: center;
  min-height: 50px;
  font-size: 18px;
  margin-top: 20px;
  padding: 8px 0px;
  padding-top: 14px;
  border-radius: 20px;
  letter-spacing: 0.1em;
  transition: 0.2s ease-in-out;
  line-height: 1.3;

  background-color: #000000;
  color: #ffffff;
  border: 1px solid ${props => props.theme.reverseBlack};

  &:hover,
  &:focus {
    transform: scale(1.05);
    outline: transparent;
    border: 1px solid #000000;
    background-color: #ffffff;
    color: #000000;
  }
`;

export const GoogleLogo = styled(Google)`
  height: 19.5px;
  margin-right: 2px;
  margin-left: 7px;
`;
