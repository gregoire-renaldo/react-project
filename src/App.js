import React, {useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  { id: 1, title: "chips", amount: 2845.36, date: new Date(2021, 2, 28) },
  {
    id: 2,
    title: "Car Insurance",
    amount: 5945.36,
    date: new Date(2021, 3, 18),
  },
  { id: 3, title: "Bike", amount: 47845.36, date: new Date(2021, 4, 29) },
];

const App = () => {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
