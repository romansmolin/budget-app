import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

export const AddExpense = () => {
  const {dispatch} = useContext(AppContext); 

  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);
  
  const onSubmit = (event) => {
    event.preventDefault();
    
    const expense = {
        id: uuidv4(),
        name: name,
        cost: parseInt(cost),
    }

    dispatch({
        type: 'ADD_EXPENSE',
        payload: expense
    })

    setName('');
	setCost('');
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm">
                <label htmlFor="name">Name</label>
                <input
                    value={name}
                    onChange={event => setName(event.target.value)} 
                    type="text"
                    required='required'
                    className='form-control'
                    id='name'
                     />
            </div>
            <div className="col-sm">
                <label htmlFor="cost">Cost</label>
                <input
                    value={cost}
                    onChange={event => setCost(event.target.value)} 
                    type="text"
                    required='required'
                    className='form-control'
                    id='cost'
                     />
            </div>
            <div className="col-sm">
                <button type='submit' className='mt-4 btn btn-primary'>Save</button>
            </div>
        </div>
    </form>
  )
}
