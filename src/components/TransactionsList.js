import Transaction from "./Transaction"

export default function TransactionsList(props) {
  
  let transactions = props.transactions;
  
  return (
    <div className ="transactionsList">
        <h3> History </h3>
        <hr />
        <ul style={{padding: '0'}}>
            {transactions.map(transaction => (
                <Transaction 
                key={transaction._id}
                id={transaction._id}
                description={transaction.text}
                value={transaction.amount}
                onDelete={id => props.handleDelete(id)}
              />))}
        </ul>
    </div>
  )
}
