import React from 'react'
import './NewExpense.css'

const ExpenseForm = () => {
  return (
    <form>
        <div className='new-expense__controls'>
            
            <div className='new-expense__control'>
                <label className=' '>Title</label>
                <input type='text'/>
            </div>
            <div className='new-expense__control'>
                <label className=' '>Date</label>
                <input type='Date' min='2020-01-01' max='2025-12-31'/>
            </div>
            <div className='new-expense__control'>
                <label className=' '>Amount</label>
                <input type='number' min='0.01' step='0.01'/>
            </div>  
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add New Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;