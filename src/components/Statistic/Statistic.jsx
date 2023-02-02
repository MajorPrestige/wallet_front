import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getStatistic, getDateArr } from 'redux/transactions/trans-selectors';
import { fetchStatistic } from 'redux/transactions/trans-operations';

import Chart from 'components/Statistic/Chart/Chart';
import DiagramTab from 'components/Statistic/DiagramTab/DiagramTab';
import DiagramForm from './DiagramForm/DiagramForm';
import { Title, StatisticContainer, TableContainer } from './Statistic.styled';

const Statistic = () => {
  const [date, setDate] = useState(() => ({ month: (new Date().getMonth() + 1), year: new Date().getFullYear() }));

  const dispatch = useDispatch();

  const { year, month } = date;

  useEffect(() => {
      dispatch(fetchStatistic({ year: Number(year), month: Number(month) }));
  }, [dispatch, month, year]);

  const transactions = useSelector(getStatistic);

  const dateArr = useSelector(getDateArr);

  const years = Object.keys(dateArr);
  const monthArr = Object.values(dateArr);

  const months = years.includes(year) ? dateArr[year] : monthArr[monthArr.length - 1];

  return (
    <StatisticContainer>
      <div>
        <Title>Statistics</Title>
        <Chart transactions={transactions} />
      </div>
      <TableContainer>
        <DiagramForm setDate={setDate} date={date} years={years} months={months}/>
        <DiagramTab transactions={transactions} />
      </TableContainer>
    </StatisticContainer>
  );
};

export default Statistic;
