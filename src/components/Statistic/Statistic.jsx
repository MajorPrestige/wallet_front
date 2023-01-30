import { useState } from 'react';

import Chart from 'components/Statistic/Chart/Chart';
import DiagramTab from 'components/Statistic/DiagramTab/DiagramTab';
import DiagramForm from './DiagramForm/DiagramForm';
import { Title, StatisticConteiner } from './Statistic.styled';

const Statistic = () => {
  const [date, setDate] = useState({ month: 1, year: 2023 });

  return (
    <StatisticConteiner>
      <div>
        <Title>Statistics</Title>
        <Chart date={date} />
      </div>
      <div>
        <DiagramForm setDate={setDate} />
        <DiagramTab date={date} />
      </div>
    </StatisticConteiner>
  );
};

export default Statistic;
