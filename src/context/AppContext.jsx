import { createContext, useReducer } from "react"
import { AppReducer } from "./AppReducer";

const initialState = {
    budget: 0,
    expenses: [
        
    ]
}

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    return(
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {children}
        </AppContext.Provider>
    )
}