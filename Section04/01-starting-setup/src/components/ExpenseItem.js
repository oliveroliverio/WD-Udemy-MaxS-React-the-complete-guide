import React from "react";

import ExpenseDate from "./ExpenseDate";
import UICard from "./UICard";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <UICard className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </UICard>
  );
};

export default ExpenseItem;
