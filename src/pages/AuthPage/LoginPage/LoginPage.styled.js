import styled from "styled-components";
import { device } from "styles/Media.variables";

export const LoginImg = styled.img`
	@media ${device.tabletOnly} {
    margin-right: 40px;
		width: 261px;
		height: 250px;
	}

	@media ${device.desktop} {
		margin-bottom: 32px;
		width: 435px;
		height: 420px;
	}
`;