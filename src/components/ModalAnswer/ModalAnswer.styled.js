import styled from "styled-components";
import { device } from "styles/Media.variables";
import { colorText, font } from '../../styles/Variables';

export const Title = styled.p`
	font-size: 17px;
  font-family: ${font.title};  
  line-height: 36px;
  text-align: center;
  color:  ${colorText.black};
  padding-top: 60px;

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
  padding-bottom: 60px;
`;

export const Container = styled.div`
  margin: 0 auto;  
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