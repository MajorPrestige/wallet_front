import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { useSelector } from 'react-redux';

import { getBalance } from 'redux/auth/auth-selectors';

import { StyledChart, StyledBalance, Notification } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ transactions }) => {
  const balance = useSelector(getBalance);

  let isTrans = false;

  const colors = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
    '#E1E384',
  ];

  if (transactions.length !== 0) {
    isTrans = true;
  }

  const expensesTrans = transactions.filter(trans => trans.type === false);

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

  const data = {
    labels: categories,
    datasets: [
      {
        label: '# of Categories',
        data: totalSums,
        backgroundColor: colors,
        borderWidth: 0,
        cutout: '65%',
      },
    ],
  };

  return (
    <>
      {isTrans ? (
        <StyledChart>
          <Doughnut data={data} />
          <StyledBalance>
            <div>
              <span>&#8372; </span>
              <span>{balance}</span>
            </div>
          </StyledBalance>
        </StyledChart>
      ) : (<Notification>You have no transactions in selected date yet. Please, choose another date.</Notification>)
    }
    </>
  );
};

export default Chart;