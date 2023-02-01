import { useEffect, useState } from 'react';

import Chart from 'components/Statistic/Chart/Chart';
import DiagramTab from 'components/Statistic/DiagramTab/DiagramTab';
import DiagramForm from './DiagramForm/DiagramForm';
import { Title, StatisticContainer, TableContainer } from './Statistic.styled';
import { useDispatch } from 'react-redux';

const Statistic = () => {
  const [date, setDate] = useState({ month: 1, year: 2023 });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch);
  }, []);

  return (
    <StatisticContainer>
      <div>
        <Title>Statistics</Title>
        <Chart date={date} />
      </div>
      <TableContainer>
        <DiagramForm setDate={setDate} />
        <DiagramTab date={date} />
      </TableContainer>
    </StatisticContainer>
  );
};

export default Statistic;
