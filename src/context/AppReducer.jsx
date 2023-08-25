export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };                      
        default:
            return state;
    }
}