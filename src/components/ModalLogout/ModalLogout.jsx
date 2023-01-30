import { signout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import { Button } from 'styles/Shared.styled';
import { ButtonWrapper, Container, Title } from './ModalLogout.styled';


const ModalLogout = ({ toogleModalCancel }) => {
  const dispatch = useDispatch();
  const onLogoutButtonClick = () => {
    dispatch(signout());
  };
  return (
    <Container>      
      
      <Title>Are you sure you want to logout?</Title>
      <ButtonWrapper>
        <Button
          primary="true"
          marginBotom="20px"
          onClick={() => toogleModalCancel()}
          type="button"
        >
          Cancel
        </Button>
        <Button outlined="true"  onClick={onLogoutButtonClick} type="submit">
          Log Out
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default ModalLogout;
