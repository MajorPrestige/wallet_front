import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "styles/Media.variables";
import Elipse1 from "images/auth/Ellipse1.png";
import Elipse2 from "images/auth/Ellipse2.png";

const linkAndButtonStyle = css`
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

export const StyledAuthForm = styled.div`
	min-height: 100vh;

	@media ${device.tabletBefore} {
		background-color: #ffffff;
	}

	@media ${device.tablet} {
		background: top 0% right 0% no-repeat url(${Elipse2}), bottom 0% left 0% no-repeat url(${Elipse1}), #e7eaf2;
	}

	@media ${device.desktop} {
		display: flex;
		align-items: center;
	}
`;

export const Title = styled.h1`
	font-family: "Poppins";
	font-weight: 400;
	font-size: 30px;
`;

export const AuthHero = styled.div`
	@media ${device.tablet} {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 60px;
		padding-bottom: 50px;
	}

	@media ${device.desktop} {
		width: 100vw;
		height: 100vh;
		flex-direction: column;
	}
`;

export const Button = styled.button`
	${linkAndButtonStyle}
`;

export const StyledLink = styled(Link)`
	${linkAndButtonStyle}
`;
