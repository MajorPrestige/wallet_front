import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { StyledChart } from './Chart.styled';
import { getStatistic } from 'redux/transactions/trans-selectors';

import { statistic } from 'redux/transactions/trans-operations';

ChartJS.register(ArcElement, Tooltip);

const Chart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statistic({year: 2022, month: 6}));
  }, [dispatch]);

  const statisticData = useSelector(getStatistic);

  const categories = [];
  const totalSums = [];
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

  for (const statistic of statisticData) {
    categories.push(statistic.category.name);
    totalSums.push(statistic.totalSum);
  }

  const data = {
    labels: categories,
    datasets: [
      {
        label: '# of Categories',
        data: totalSums,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <StyledChart>
      <Doughnut data={data} />
    </StyledChart>
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