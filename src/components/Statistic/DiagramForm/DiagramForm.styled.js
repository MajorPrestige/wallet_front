import styled from "styled-components";
import { device } from "styles/Media.variables";
import { Form, Field } from 'formik';

export const FormConteiner = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const StyledForm = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  font-family: 'Circe';
  font-size: 16px;
  line-height: 24px;

  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 30px;

  padding-top: 12px;
  padding-right: 20px;
  padding-bottom: 14px;
  padding-left: 20px;

  width: 280px; 
  height: 50px;

  &:first-child {
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    width: 160px; 
    &:first-child {
      margin-right: 16px;
      margin-bottom: 0px;
    }
  }

  @media ${device.desktop} {
    width: 182px; 
    &:first-child {
      margin-right: 32px;
    }
  }
`;