import TransactionsList from './components/TransactionsList';
import Balance from './components/Balance';
import AddTransactionForm from './components/AddTransactionForm';
import './styles/App.css';
import { useState, useEffect } from 'react';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);


  useEffect(() => {
    // Send GET request to the api
    const getTransactions = async () => {
      const url = 'http://localhost:5000/api/transactions';
      try {
        let res = await fetch(url);
        res = await res.json();

        setTransactions(res.data);

      } catch (err) {
        console.log(err);
      }
    };

    getTransactions();

  }, []);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    transactions.forEach(element => {
      if (element.amount > 0) {
        totalIncomes += element.amount;
      }
      else {
        totalExpenses += Math.abs(element.amount)
      }
    });
    setExpenses(totalExpenses);
    setIncomes(totalIncomes);
  }, [transactions]);

  const handleDelete = async (id) => {
    // Send DELETE request to the api
    const url = `http://localhost:5000/api/transactions/${id}`;
    try {
        await fetch(url, { method: 'delete' });
        setTransactions(transactions.filter(transaction => {
          return transaction._id !== id;
        }));
    } catch (err) {
        console.log(err);
    }
    
  };

  const handleAddTransaction = async (transaction) => {
    // Send POST request to the api
    const url = 'http://localhost:5000/api/transactions';
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    }
    try {
      
      let res = await fetch(url, options);
      res = await res.json();

      setTransactions(prev => {
        return [...prev, res.data];
      })

    } catch (err) {
      console.log(err);
    }
    
  }

  return (
    <div className="app-container">
      <h1 className='app-container__title'>Expense Tracker</h1>
      <Balance incomes={incomes} expenses={expenses} />
      <TransactionsList
        transactions={transactions}
        handleDelete={handleDelete} />
      <AddTransactionForm
        onChange={handleAddTransaction} />
    </div>
  );
}

export default App;
