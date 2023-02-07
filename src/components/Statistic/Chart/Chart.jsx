import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Trans } from 'react-i18next';

import {
  StyledChart,
  StyledBalance,
  Notification,
  BalanceText,
  Text,
} from './Chart.styled';
import { diargamColors } from '../../../styles/Variables';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ transactions }) => {
  const totalTrans = transactions.reduce((total, trans) => {
    if (trans.type) {
      return total;
    }

    return total + trans.sum;
  }, 0);

  let isExpensTrans = false;
  let isIncomeTrans = false;

  const expensesTrans = transactions.filter(trans => trans.type === false);
  if (expensesTrans.length !== 0) {
    isExpensTrans = true;
  }

  const incomeTrans = transactions.filter(trans => trans.type === true);
  if (incomeTrans.length !== 0 && expensesTrans.length === 0) {
    isIncomeTrans = true;
  }

  const categories = [
    ...new Set(expensesTrans.map(trans => trans.category.name)),
  ];

  const totalSums = categories.map(category =>
    expensesTrans
      .filter(trans => trans.category.name === category)
      .reduce((total, trans) => {
        return total + trans.sum;
      }, 0),
  );

  const dataIncome = {
    labels: [''],
    datasets: [
      {
        label: 'Income',
        data: [100],
        backgroundColor: '#d0d0d0',
        borderWidth: 0,
        cutout: '85%',
      },
    ],
  };

  const dataExpens = {
    labels: categories,
    datasets: [
      {
        label: '% of Categories',
        data: totalSums,
        backgroundColor: diargamColors,
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  return (
    <>
      {isIncomeTrans && (
        <StyledChart>
          <Doughnut data={dataIncome} />
          <StyledBalance>
            <div>
              <BalanceText>&#8372; </BalanceText>
              <BalanceText>{totalTrans.toFixed(2)}</BalanceText>
            </div>
          </StyledBalance>
        </StyledChart>
      )}
      {isExpensTrans && (
        <StyledChart>
          <Doughnut data={dataExpens} />
          <StyledBalance>
            <div>
              <BalanceText>&#8372; </BalanceText>
              <BalanceText>{totalTrans.toFixed(2)}</BalanceText>
            </div>
          </StyledBalance>
        </StyledChart>
      )}
      {!isIncomeTrans && !isExpensTrans && (
        <Notification>
          <Text>
            <Trans i18nKey="chart.notification.text">
              You have no transactions in selected date yet. <br /> Please add
              transaction or choose another date.
            </Trans>
          </Text>
        </Notification>
      )}
    </>
  );
};

export default Chart;
