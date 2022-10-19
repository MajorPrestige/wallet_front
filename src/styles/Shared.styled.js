import styled from "styled-components";
import { device } from "./Media.variables";

export const Container = styled.div`
	@media ${device.tabletBefore} {
		padding-left: 20px;
		padding-right: 20px;
	}
`;

