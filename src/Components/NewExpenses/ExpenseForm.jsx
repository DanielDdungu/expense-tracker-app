import React, {useState} from 'react'
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    //: -----------------------Stroring tittle entered data from the user
    const [enteredTitle, setEnterdTitle] = useState('');
    const [enteredDate, setSelectedDate ] = useState('');
    const [enteredAmount, setEnteredAmount ] = useState('kj');

    //1: ----------------------Title change event handling using input values
    const tittleChangeHandler = (e) => {
        setEnterdTitle(e.target.value);
    };

    //------------------------Date change vent handling using input values
    const dateChangeHandler = (e) => {
        setSelectedDate(e.target.value);
    }

    //------------------------Date change vent handling using input values
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    
    //Handling the form submission event

    const submitHandler = (e) => {

        e.preventDefault();


    //storing submited data into an object
    const expenseData = {

        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
            
    }

   props.onSaveExpenseData(expenseData);
     setEnterdTitle('');
     setEnteredAmount('');
     setSelectedDate('');

    };


  return (
    
    <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
            
                <div className='new-expense__control'>
                    <label className=' '>Title</label>
                    <input 
                    type='text' 
                    onChange={tittleChangeHandler}
                    value={enteredTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label className=' '>Date</label>
                    <input 
                    type='Date'
                    min='2020-01-01' 
                    max='2025-12-31' 
                    onChange={dateChangeHandler}
                    value={enteredDate}
                    />
                </div>
                <div className='new-expense__control'>
                    <label className=' '>Amount</label>
                    <input type='number'
                     min='0.01' 
                     step='0.01' 
                     onChange={amountChangeHandler}
                     value={enteredAmount}/>
                </div>  
        
         </div>
         <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>
            Cancel
        </button>
                    <button type='submit' >Add New Expense</button>
            </div>
    </form>
  )
}

export default ExpenseForm;