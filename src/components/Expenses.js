
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from './Card'

function Expenses (props) {
  const items = props.items

  const listItems = items.map((item) => {
    return <ExpenseItem title={item.title} amount={item.amount} date={item.date} />;
  });

  return <Card className="expenses">{listItems}</Card>

}

export default Expenses;
