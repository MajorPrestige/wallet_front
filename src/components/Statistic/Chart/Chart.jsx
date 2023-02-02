import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getBalance } from 'redux/auth/auth-selectors';
import { getStatistic } from 'redux/transactions/trans-selectors';
import { fetchStatistic } from 'redux/transactions/trans-operations';

import { StyledChart, StyledBalance, Notification } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ date }) => {
  const dispatch = useDispatch();

  const balance = useSelector(getBalance);

  let isTrans = false;

  const { year, month } = date;

  useEffect(() => {
    dispatch(fetchStatistic({ year: Number(year), month: Number(month) }));
  }, [dispatch, month, year]);

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

  const transactions = useSelector(getStatistic);

  if (transactions.length !== 0) {
    isTrans = true;
  }

  // три флажки на кожен варіант: є витрати, є інкам нема витрат, немає нічого
  // перевірка чи є транзакції за ці роки, місяці

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

// const categories = [
//   'Main expenses',
//   'Products',
//   'Car',
//   'Self care',
//   'Child care',
//   'Household products',
//   'Education',
//   'Leisure',
//   'Other expenses',
//   'Entertainment',
// ];

// const totalSums = [100, 100, 300, 10, 5, 20, 250, 20, 100, 10];
