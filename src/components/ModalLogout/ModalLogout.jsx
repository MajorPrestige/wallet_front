import { signout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const onLogoutButtonClick = () => {
    dispatch(signout());
  };
  return (
    <>
      <div>Do you really want to logout?</div>
      <button onClick={onLogoutButtonClick} type="submit">Log Out</button>
      <button  type="button">Cancel</button>
    </>
  );
};

export default ModalLogout;
