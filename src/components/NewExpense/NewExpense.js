import React, { useState} from 'react'
import  './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense (props)  {
  const [showForm, setShowForm] = useState(false);

  const displayForm = () => {
    setShowForm(!showForm);
  };

  const saveExpenseDataHandler = ( enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    console.log(expenseData)
  }
  return (
    <div className="new-expense">
      <button onClick={displayForm}>Add new expense</button>
      {showForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> : null }

    </div>
  );
};

export default NewExpense;
