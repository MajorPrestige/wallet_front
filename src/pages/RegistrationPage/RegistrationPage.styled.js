import styled from "styled-components";
import { device } from "styles/Media.variables";
import Elipse1 from "images/registration/Ellipse1.png";
import Elipse2 from "images/registration/Ellipse2.png";

export const StyledRegistrationForm = styled.div`
	min-height: 100vh;

	@media ${device.tabletBefore} {
		background-color: #ffffff;
	}

	@media ${device.tablet} {
		background: top 0% right 0% no-repeat url(${Elipse2}), bottom 0% left 0% no-repeat url(${Elipse1}), #e7eaf2;
	}
`;

export const RegistrationHero = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 60px;
	padding-bottom: 50px;
`;

export const RegistrationImg = styled.img`
	@media ${device.tabletOnly} {
		width: 274px;
		height: 250px;
	}
` 