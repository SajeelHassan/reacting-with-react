import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShow, setisShow] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisShow(false);
  };
  const showFormHandler = () => {
    setisShow(true);
  };
  const hideFormHandler = () => {
    setisShow(false);
  };

  return (
    <div className="new-expense">
      {!isShow && <button onClick={showFormHandler}>Add Expense</button>}
      {isShow && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideForm={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
