import '../styles/Balance.css';
import { currencyFormatter } from '../utils/currencyFormatter';

export default function Balance(props) {
    let incomes = props.incomes;
    let expenses = props.expenses;

  return (
    <div className="balance">
        <div>
            <h3 className="balance__title">Your Balance</h3>
            <span className="balance__value">{currencyFormatter.format(incomes - expenses)}</span>
        </div>
        <div className='balance__info'>
            <div className='balance__info-income'>
                <p>INCOME</p>
                <span className='balance__info--green'>{currencyFormatter.format(incomes)}</span>
            </div>
            <div className='balance__info-expense'>
                <p>EXPENSE</p>
                <span className='balance__info--red'>${currencyFormatter.format(expenses)}</span>
            </div>
        </div>
        
    </div>
  )
}
