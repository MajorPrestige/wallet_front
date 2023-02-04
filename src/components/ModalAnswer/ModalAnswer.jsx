import { Button } from 'styles/Shared.styled';
import { ButtonWrapper, Container, Title } from './ModalAnswer.styled';

const ModalAnswer = ({ toggleModalCancel, text, onButtonClick }) => {
  return (
    <Container>
      <Title>{text}</Title>
      <ButtonWrapper>
        <Button
          primary="true"
          marginBotom="20px"
          onClick={() => onButtonClick(toggleModalCancel)}
          type="submit"
        >
          YES
        </Button>
        <Button
          outlined="true"
          onClick={toggleModalCancel}
          type="button"
        >
          NO
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default ModalAnswer;
