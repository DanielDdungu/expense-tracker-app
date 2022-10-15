import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
  return (
     <div className='expenses'>
      <ExpenseItem  
      title={props.Item[0].title} 
      amount={props.Item[0].amount} 
      date={props.Item[0].date}
      />
      <ExpenseItem  
      title={props.Item[1].title} 
      amount={props.Item[1].amount} 
      date={props.Item[1].date}
      />
      <ExpenseItem  
      title={props.Item[2].title} 
      amount={props.Item[2].amount} 
      date={props.Item[2].date}
      />
      <ExpenseItem  
      title={props.Item[3].title} 
      amount={props.Item[3].amount} 
      date={props.Item[3].date}
      />
      
    </div>
  )
}

export default Expenses