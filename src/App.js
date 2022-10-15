import Expenses from "./Components/Expenses";

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
      <Expenses Item={expenses}/>
      
    </div>
  );
}

export default App;
