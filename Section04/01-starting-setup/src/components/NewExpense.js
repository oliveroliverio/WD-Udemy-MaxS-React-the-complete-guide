import React from "react";

import NewExpense_Form from "./NewExpense_Form";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpense_Form onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
