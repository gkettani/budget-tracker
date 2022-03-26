import { useState } from 'react';

export default function AddTransactionForm(props) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();
        if (description !== "" && amount !== ""){
            const newTransaction = {
                id : Math.floor(Math.random() * 100000),
                description : description,
                value : parseFloat(amount)
            }
            setDescription('');
            setAmount(0);
            props.onChange(newTransaction);
        }
    }
  return (
    <form className='add-transaction-form' onSubmit={onSubmit}>
        <h2>Add a new transaction</h2>
        <label htmlFor='description'>Description</label>
        <input  id="description"
                placeholder='Transaction description' 
                type='text' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
        <label htmlFor='amount'>Amount</label>
        <input id="amount"
                type="number" 
                step='0.01'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}/>
        <button className='btn add-transaction'>
                Add new Transaction 
        </button>
    </form>
  )
}
