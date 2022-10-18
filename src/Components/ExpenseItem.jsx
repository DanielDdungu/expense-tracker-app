import React, {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from'./ExpenseDate'; 
import Card from './Card';
function ExpenseItem(props) {  
    //State management
    const [title, setTitle] = useState(props.title);

    //Button clicked Event Listener
    const buttonClickedHandler = () => {
        setTitle('Suscripción mensual a Internet');
        console.log(title);
    }
    return (
        <Card className='expense-item'> 
            <ExpenseDate date={props.date}/> 
             <div className='expense-item__description'> 
                <h2 className='expense-item h2' >{title}</h2>
                <div className='expense-item__price'>{props.amount} €</div>
                <button onClick={buttonClickedHandler}>Change Tittle</button>
             </div>
        </Card>
    );
    
}

export default  ExpenseItem;