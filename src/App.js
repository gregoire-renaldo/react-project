import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: 1, title: "chips", amount: 2845.36, date: new Date(2121, 2, 28) },
    { id: 2, title: "Car Insurance", amount: 5945.36, date: new Date(2021, 3, 18) },
    { id: 3, title: "Bike", amount: 47845.36, date: new Date(2021, 4, 29) },
  ];
  return (
    <div>
      <h2>Hellooo</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
