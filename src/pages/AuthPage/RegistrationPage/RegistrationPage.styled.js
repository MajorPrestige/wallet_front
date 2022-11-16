import styled from "styled-components";
import { device } from "styles/Media.variables";

export const RegistrationImg = styled.img`
	
	@media ${device.tabletOnly} {
		margin-right: 40px;
		width: 274px;
		height: 250px;
	}

	@media ${device.desktop} {
		margin-bottom: 32px;
		width: 453px;
		height: 413px;
	}
`;
