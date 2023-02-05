import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { useSelector } from 'react-redux';

import { getBalance } from 'redux/auth/auth-selectors';

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
  const balance = useSelector(getBalance);

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
              <BalanceText>{balance.toFixed(2)}</BalanceText>
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
              <BalanceText>{balance.toFixed(2)}</BalanceText>
            </div>
          </StyledBalance>
        </StyledChart>
      )}
      {!isIncomeTrans && !isExpensTrans && (
        <Notification>
          <Text>
            You have no transactions in selected date yet. <br /> Please add
            transaction or choose another date.
          </Text>
        </Notification>
      )}
    </>
  );
};

export default Chart;
