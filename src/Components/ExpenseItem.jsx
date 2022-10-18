
import './ExpenseItem.css'
import ExpenseDate from'./ExpenseDate'; 
import Card from './Card';
function ExpenseItem(props) {  

    //Button clicked Event Listener
    let title = props.title;

    const buttonClickedHandler = () => {
       title = 'Updated';
    }
    return (
        <Card className='expense-item'> 
            <ExpenseDate date={props.date}/> 
             <div className='expense-item__description'> 
                <h2 className='expense-item h2' >{ title}</h2>
                <div className='expense-item__price'>{props.amount} €</div>
                <button onClick={buttonClickedHandler}>Change Tittle</button>
             </div>
        </Card>
    );
    
}

export default  ExpenseItem;