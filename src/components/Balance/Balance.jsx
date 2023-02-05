import { useSelector } from "react-redux";
import { getBalance } from "redux/auth/auth-selectors";
import { BalanceContainer } from "./Balance.styled";
import { useTranslation } from "react-i18next";

const Balance = () => {
  const { t } = useTranslation();
  const balance = useSelector(getBalance);

  return (
    <BalanceContainer>
      <p>{t('balance.your_balance')}</p>
      <p>
        <span>&#8372; </span>
        <span>{balance.toFixed(2)}</span>
      </p>
    </BalanceContainer>
  );
};

export default Balance;
