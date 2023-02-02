import {
  TableContainer,
  TableHead,
  Category,
  TableBody,
  TableRow,
  OperationCat,
  OperationSum,
  Square,
  Totals,
  Expense,
  Income,
  CellInner,
  Sum,
} from './DiagramTab.styled';

// import styles from './DiagramTab.styled';

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

const DiagramTab = ({ transactions }) => {

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

  return (
    <>
      <TableContainer>
        <TableHead>
          <tr>
            <Category>Category</Category>
            <Category>Sum</Category>
          </tr>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </TableContainer>
      <Sum>
        <Totals>
          Expenses:<Expense>{expense.toFixed(2)}</Expense>
        </Totals>
        <Totals>
          Income:<Income>{income.toFixed(2)}</Income>
        </Totals>
      </Sum>
    </>
  );
};

export default DiagramTab;