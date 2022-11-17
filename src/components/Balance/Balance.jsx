import { useSelector } from "react-redux";
import { getBalance } from "redux/auth/auth-selectors";
import { BalanceContainer } from "./Balance.styled";

const Balance = () => {
  const balance = useSelector(getBalance);

  return (
    <BalanceContainer>
      <p>YOUR BALANCE</p>
      <p>
        <span>&#8372; </span>
        <span>{balance}</span>
      </p>
    </BalanceContainer>
  );
};

export default Balance;
