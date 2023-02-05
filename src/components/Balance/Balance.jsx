import { useSelector } from "react-redux";
import { getBalance } from "redux/auth/auth-selectors";

import { useTranslation } from "react-i18next";
import { BalanceContainer, BalanceText } from "./Balance.styled";


const Balance = () => {
  const { t } = useTranslation();
  const balance = useSelector(getBalance);

  return (
    <BalanceContainer>
      <p>{t('balance.your_balance')}</p>
      <p>
        <BalanceText>&#8372; </BalanceText>
        <BalanceText>{balance.toFixed(2)}</BalanceText>
      </p>
    </BalanceContainer>
  );
};

export default Balance;
