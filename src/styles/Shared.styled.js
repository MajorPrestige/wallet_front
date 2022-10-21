import styled, { css } from "styled-components";
import { device } from "./Media.variables";

export const AuthContainer = styled.div`
	@media ${device.tabletBefore} {
    height: 100vh;
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
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(25px);
	}
`;

export const Title = styled.h1`
	font-family: "Poppins";
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
