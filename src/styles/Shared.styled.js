import styled, {css} from "styled-components";
import { device } from "./Media.variables";

export const Container = styled.div`
	@media ${device.tabletBefore} {
		padding-left: 20px;
		padding-right: 20px;
	}
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 30px;
`;

export const Button = styled.button`
  position: relative;  
  display: block;
  width: 280px;
  min-height: 50px;
  font-size: 18px;
  margin-bottom: ${props => props.marginBotom || "0px"};
  padding: 8px 0px;
  padding-top: 12px;
  border-radius: 20px;
  letter-spacing: 0.1em;
  transition: 0.2s ease-in-out;

  &:hover,
  &:focus {
    border: 2px solid transparent;
    transform: scale(1.05);
    outline: transparent;
  }

  ${props => props.primary && css`
    background-color: #24CCA7;
    color: #FFFFFF;
    border: 1px solid transparent;

    &:hover,
    &:focus {
      background-color: #FFFFFF;
      color: #24CCA7;
      border: 1px solid #24CCA7;
    }
  `}
  
  ${props => props.outlined && css`
    background-color: #FFFFFF;
    color: #4A56E2;
    border: 1px solid #4A56E2;

    &:hover,
    &:focus {
      background-color: #4A56E2;
      color: #FFFFFF;
    }
  `}

`