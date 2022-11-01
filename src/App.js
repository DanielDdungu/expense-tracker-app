import React, {useState} from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Tarjeta mensual de transporte',
      amount: 56.60,
      date: new Date(2022, 7, 14),
    },
    { id: 'e2', title: 'Nuevo portátil', 
    amount: 1500.00, 
    date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      title: 'Seguro de coche',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'Nuevo escritorio',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {
  //    Destructuring the expenses
 const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
   setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses Items={expenses}/>
      
    </div>
  );
}

export default App;
