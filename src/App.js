import TransactionsList from './components/TransactionsList';
import Balance from './components/Balance';
import AddTransactionForm from './components/AddTransactionForm';
import './styles/App.css';
import { useState } from 'react';


function App() {
  const [transactions, setTransactions] = useState([]);
  let incomes = 0;
  let expenses = 0;
  transactions.forEach(element => {
      if (element.value > 0)
      {
          incomes += element.value;
      }
      else {
          expenses += Math.abs(element.value)
      }
  });

  return (
    <div className="app-container">
      <h1 className='app-container__title'>Expense Tracker</h1>
      <Balance incomes={incomes} expenses={expenses}/>
      <TransactionsList transactions={transactions} 
      handleDelete={id => { setTransactions(transactions.filter(transaction => transaction.id !== id))
      }}/>
      <AddTransactionForm onChange={transaction => setTransactions(prev => {
        return [...prev, transaction];
      })}/>
    </div>
  );
}

export default App;
