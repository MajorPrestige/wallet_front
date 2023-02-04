import {
  TableContainer,
  Category,
  TableRow,
  OperationCat,
  OperationSum,
  Square,
  Totals,
  Expense,
  Income,
  CellInner,
} from './DiagramTab.styled';
import { diargamColors } from '../../../styles/Variables';

const DiagramTab = ({ transactions }) => {

  const expensesTrans = transactions.filter(trans => trans.type === false);

  const categories = [
    ...new Set(expensesTrans.map(trans => trans.category.name)),
  ];

  const totalSums = categories.map((category, i) => ({
    id: i,
    category,
    color: diargamColors[i],
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

  return (
    <>
      <TableContainer>
        <thead>
          <tr>
            <Category>Category</Category>
            <Category>Sum</Category>
          </tr>
        </thead>
        <tbody>
          {totalSums.map(({ id, category, totalSum, color }) => {
            return (
              <TableRow key={id}>
                <OperationCat>
                  <CellInner>
                    <Square color={color} />
                    {category}
                  </CellInner>
                </OperationCat>
                <OperationSum>
                  <CellInner>
                    {totalSum.toFixed(2)}
                  </CellInner>
                </OperationSum>
              </TableRow>
            );
          })}
        </tbody>
      </TableContainer>
      <div>
        <Totals>
          Expenses:<Expense>{expense.toFixed(2)}</Expense>
        </Totals>
        <Totals>
          Income:<Income>{income.toFixed(2)}</Income>
        </Totals>
      </div>
    </>
  );
};

export default DiagramTab;