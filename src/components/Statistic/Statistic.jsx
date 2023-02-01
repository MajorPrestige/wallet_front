import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getStatistic } from 'redux/transactions/trans-selectors';
import { fetchStatistic } from 'redux/transactions/trans-operations';

import Chart from 'components/Statistic/Chart/Chart';
import DiagramTab from 'components/Statistic/DiagramTab/DiagramTab';
import DiagramForm from './DiagramForm/DiagramForm';
import { Title, StatisticContainer, TableContainer } from './Statistic.styled';

const Statistic = () => {
  const [date, setDate] = useState({ month: 1, year: 2023 });

  const dispatch = useDispatch();

  const { year, month } = date;

  useEffect(() => {
      dispatch(fetchStatistic({ year: Number(year), month: Number(month) }));
    }, [dispatch, month, year]);

  const transactions = useSelector(getStatistic);
  
  // console.log(transactions);

  // const arr = transactions.reduce((acc, trans) => {
  //   const year = new Date(trans.date).getYear();
  //   const month = new Date(trans.date).getMonth();
  //   acc[year] = [month + 1];
  // }, {});

  // console.log(arr);

  // const result = {
  //   "2022": [],
  // };

  return (
    <StatisticContainer>
      <div>
        <Title>Statistics</Title>
        <Chart transactions={transactions} />
      </div>
      <TableContainer>
        <DiagramForm setDate={setDate} />
        <DiagramTab transactions={transactions} />
      </TableContainer>
    </StatisticContainer>
  );
};

export default Statistic;
