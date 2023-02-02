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

  // const dates = transactions.map(trans => trans.date);
  // const newDate = new Date(dates[0]);
  // console.log(dates[0]);
  // console.log(newDate);
  // console.log(newDate.getFullYear());
  
  // console.log(transactions);

  // const arr = transactions
  //   .map(trans => trans.date)
  //   .reduce((acc, date) => {
  //     const year = new Date(date).getFullYear();
  //     const month = new Date(date).getMonth();
  //     acc.year = year;
  //     acc.month = (month + 1);
  //   }, {year, month});

  // const arr = transactions.reduce((acc, trans) => {
  //   const year = new Date(trans.date).getFullYear();
  //   const month = new Date(trans.date).getMonth();
  //   return acc = month + 1;
  // }, {year: [month]});

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
