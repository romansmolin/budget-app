import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext'

export const Remaining = () => {
  const {budget, expenses} = useContext(AppContext);
  const totalExpense = expenses.reduce((acc, expense) => acc+=expense.cost, 0)
  const remaining = budget - totalExpense;
  const ifDangerLimit = (remaining) => {
    return remaining < 1500 ? 'alert alert-danger' : 'alert alert-success';
  }
  return (
    <div className={ifDangerLimit(remaining)}>
        <span>Remaining: ${remaining}</span>
    </div>
  )
}
