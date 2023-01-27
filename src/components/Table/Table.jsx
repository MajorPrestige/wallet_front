import React from 'react';
import { Category, TableContainer, PlusSum, MinusSum, TableHead, Operations } from './Table.styled';

import transactions from './transactions';

const Table = () => {
  return (
    <TableContainer>
      <TableHead>
        <tr>
          <Category>Date</Category>
          <Category>Type</Category>
          <Category>Category</Category>
          <Category>Comment</Category>
          <Category>Sum</Category>
          <Category>Balance</Category>
        </tr>
      </TableHead>
      <tbody>
        {transactions.map(({ id,
          Date,
          Type,
          Category,
          Comment,
          Sum,
          Balance }) => (
          <tr key={id}>
            <Operations>{Date}</Operations>
            <Operations>{Type}</Operations>
            <Operations>{Category}</Operations>
            <Operations>{Comment}</Operations>
            {Type === "+" ? <PlusSum>{Sum}</PlusSum> : <MinusSum>{Sum}</MinusSum>}
            <Operations>{Balance}</Operations>

          </tr>
        ))}
      </tbody>


    </TableContainer>
  );
};

export default Table;
