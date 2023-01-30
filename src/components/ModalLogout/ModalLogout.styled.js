import styled from "styled-components";
import { device } from "styles/Media.variables";

export const Title = styled.h2`
	font-size: 16px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  color: #000000;
  padding-top: 20px;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 45px;
  }
	
`;

export const ButtonWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-bottom: 20px;
  display:flex;
  flex-direction:column;
  text-align: center;
  justify-content:center;
  @media ${device.mobileOnly} {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${device.mobile} {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.desktop} {
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
  }
`;