import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "styles/Media.variables";


const linkAndButtonStyles = css`
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

	${props =>
		props.primary &&
		css`
			background-color: #24cca7;
			color: #ffffff;
			border: 1px solid transparent;

			&:hover,
			&:focus {
				background-color: #ffffff;
				color: #24cca7;
				border: 1px solid #24cca7;
			}
		`}

	${props =>
		props.outlined &&
		css`
			background-color: #ffffff;
			color: #4a56e2;
			border: 1px solid #4a56e2;

			&:hover,
			&:focus {
				background-color: #4a56e2;
				color: #ffffff;
			}
		`}
`;

export const Button = styled.button`
	${linkAndButtonStyles}
`;

export const StyledLink = styled(Link)`
	${linkAndButtonStyles}
`;

export const Title = styled.h1`
	font-family: "Poppins";
	font-weight: 400;
	font-size: 30px;
`;

export const Container = styled.div`
  @media ${device.mobileOnly} {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media ${device.mobile} {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media ${device.desktop} {
    margin-left: 16px;
    margin-right: 16px;
  }

`;




