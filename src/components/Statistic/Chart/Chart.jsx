import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { useSelector } from 'react-redux';
import { Trans } from "react-i18next";

import { getBalance } from 'redux/auth/auth-selectors';

import { StyledChart, StyledBalance, Notification, Text } from './Chart.styled';
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
              <span>&#8372; </span>
              <span>{balance.toFixed(2)}</span>
            </div>
          </StyledBalance>
        </StyledChart>
      )}
      {isExpensTrans && (
        <StyledChart>
          <Doughnut data={dataExpens} />
          <StyledBalance>
            <div>
              <span>&#8372; </span>
              <span>{balance.toFixed(2)}</span>
            </div>
          </StyledBalance>
        </StyledChart>
      )
    }
    {!isIncomeTrans && !isExpensTrans && (
    <Notification>
      <Text>
      <Trans i18nKey="chart.notification.text">
      You have no transactions in selected date yet. <br/> Please add transaction or choose another date.
      </Trans>
      </Text>
    </Notification>
    )}
    </>
  );
};

export default Chart;
