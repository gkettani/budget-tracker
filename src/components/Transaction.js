import '../styles/Transaction.css';
import { currencyFormatter } from '../utils/currencyFormatter';

export default function Transaction(props) {
    const id = props.id;
    return (
        <li className="transaction">
            <div className=
            {'transaction__container ' + (props.value >= 0 ? 'transaction--green' : 'transaction--red')}>
                <p className="transaction__description"> {props.description} </p>
                <p className="transaction__value">{currencyFormatter.format(props.value)}</p>
            </div>
            <button className="delete-btn" onClick={()=>props.onDelete(id)}><i className="uil uil-times-circle"></i></button>
        </li>
    )
}
