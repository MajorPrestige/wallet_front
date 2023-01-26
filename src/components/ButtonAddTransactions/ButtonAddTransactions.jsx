import React from "react";
import { Button } from "./ButtonAddTransactions";
const ButtonAddTransactions = ({ modalHandler }) => {
  return (
    <Button      
      type="button"
      onClick={() => modalHandler()}
    >+</Button>
  );
};

export default ButtonAddTransactions;