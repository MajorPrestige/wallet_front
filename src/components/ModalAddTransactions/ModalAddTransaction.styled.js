import styled from 'styled-components';

export const Conteiner = styled.div`
  padding: 20px 9px 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 40px 73px 60px;
  }
`;

export const FormAddTrans = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;
export const Checkbox = styled.input`
`;
export const Lable = styled.label`
`;
export const Inpput = styled.input``;

export const Select = styled.select``;



export const Title = styled.h2`
  font-size: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 45px;
  }
`;

export const ButtonAdd = styled.button`
  width: 300px;
  height: 50px;
  background: #ffffff;
  border: 1px transparent;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;
  background: #24cca7;
`;

export const ButtonCancel = styled.button`
  width: 300px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;
`;
