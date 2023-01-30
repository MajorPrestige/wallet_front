import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getStatistic } from 'redux/transactions/trans-selectors';
import { statistic } from 'redux/transactions/trans-operations';

import { TableContainer, TableHead, Category, TableBody, TableRow, OperationCat, OperationSum, Square } from './DiagramTab.styled';

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

const DiagramTab = ({ date }) => {
  const dispatch = useDispatch();

  const { year, month } = date;

  useEffect(() => {
    dispatch(statistic({ year: Number(year), month: Number(month) }));
  }, [dispatch, month, year]);

  const transactions = useSelector(getStatistic);

  const expensesTrans = transactions.filter(trans => trans.type === false);

  const categories = [
    ...new Set(expensesTrans.map(trans => trans.category.name)),
  ];

  const totalSums = categories.map((category, i) => ({
    id: i,
    category,
    color: colors[i],
    totalSum: expensesTrans
      .filter(trans => trans.category.name === category)
      .reduce((total, trans) => {
        return total + trans.sum;
      }, 0),
  }));

  const expense = expensesTrans.reduce((total, trans) => {
    return total + trans.sum;
  }, 0);
  const income = transactions
    .filter(trans => trans.type === true)
    .reduce((total, trans) => {
      return total + trans.sum;
    }, 0);

  return (<>
    <TableContainer>
      <TableHead>
        <tr>
          <Category>Category</Category>
          <Category>Sum</Category>
        </tr>
      </TableHead>
      <TableBody>
        {totalSums.map(({ id, category, totalSum, color }) => (
          <TableRow key={id}>
            <OperationCat><Square style={{backgroundColor: {color}}}/>{category}</OperationCat>
            <OperationSum>{totalSum}</OperationSum>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
    <div>
      <p>Expenses:<span>{expense}</span></p>
      <p>Income:<span>{income}</span></p>
    </div>
    </>
  );
};

export default DiagramTab;
