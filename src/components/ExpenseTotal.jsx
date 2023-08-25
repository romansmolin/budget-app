import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

export const ExpenseTotal = () => {
  const {expenses} = useContext(AppContext);
  const totalExpense = expenses.reduce((acc, expense) => acc+=expense.cost, 0)

  return (
    <div className='alert alert-primary'>
        <span>Spent so far: ${totalExpense}</span>
    </div>
  )
}
