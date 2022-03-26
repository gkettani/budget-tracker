import '../styles/Transaction.css';

export default function Transaction(props) {
    const id = props.id;

    return (
        <li className="transaction">
            <div className="transaction__container">
                <p className="transaction__description"> {props.description} </p>
                <p className="transaction__value">$ {props.value}</p>
                <span id="stateColor" className={props.value >= 0 ? 'transaction--green' : 'transaction--red'}/>
            </div>
            <button className="delete-btn" onClick={()=>props.onDelete(id)}><i className="uil uil-times-circle"></i></button>
        </li>
    )
}
