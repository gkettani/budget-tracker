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
                key={transaction.id}
                id={transaction.id}
                description={transaction.description}
                value={transaction.value}
                onDelete={id => props.handleDelete(id)}
                />))}
        </ul>
    </div>
  )
}
