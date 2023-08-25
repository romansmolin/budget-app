import React, {useContext, useEffect, useState} from 'react'
import { ExpenseItem } from './ExpenseItem';
import { AppContext } from '../context/AppContext';

export const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};
  
  return (
    <>
        <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='Type to search...'
            onChange={handleChange}
          />

          <ul className='list-group'>
              {filteredExpenses.map((item) => (
                    <ExpenseItem 
                        name={item.name}
                        cost={item.cost}
                        id={item.id}
                    />
                ))}
          </ul>
    </>
    
  )
}
