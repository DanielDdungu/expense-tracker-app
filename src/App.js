import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
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
  return (
    <div>
      <ExpenseItem  
      title={expenses[0].title} 
      amount={expenses[0].amount} 
      date={expenses[0].date}
      />
      <ExpenseItem  
      title={expenses[1].title} 
      amount={expenses[1].amount} 
      date={expenses[1].date}
      />
      <ExpenseItem  
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date={expenses[2].date}
      />
      <ExpenseItem  
      title={expenses[3].title} 
      amount={expenses[3].amount} 
      date={expenses[3].date}
      />
      
    </div>
  );
}

export default App;
