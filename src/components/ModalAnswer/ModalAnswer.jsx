import { Button } from 'styles/Shared.styled';
import { ButtonWrapper, Container, Title } from './ModalAnswer.styled';
import { useTranslation } from "react-i18next";

const ModalAnswer = ({ toggleModalCancel, text, onButtonClick }) => {
  const { t } = useTranslation();
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
          {t('modalAnswer.yes')}
        </Button>
        <Button
          outlined="true"
          onClick={toggleModalCancel}
          type="button"
        >
          {t('modalAnswer.no')}
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default ModalAnswer;
