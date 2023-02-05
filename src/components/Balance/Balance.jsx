import { useSelector } from "react-redux";
import { getBalance } from "redux/auth/auth-selectors";
import { BalanceContainer, BalanceText } from "./Balance.styled";

const Balance = () => {
  const balance = useSelector(getBalance);

  return (
    <BalanceContainer>
      <p>YOUR BALANCE</p>
      <p>
        <BalanceText>&#8372; </BalanceText>
        <BalanceText>{balance.toFixed(2)}</BalanceText>
      </p>
    </BalanceContainer>
  );
};

export default Balance;
