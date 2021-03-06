import alertReducer from "./AlertReducer";
import { createContext,useReducer } from "react";

const AlertContext = createContext();

export const AlertProvider = ({children}) => {

    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (msg, type) => {
        dispatch({
            type: "SET_ALERT",
            payload: {msg, type}
        });

        setTimeout(() => {dispatch({type: "CLEAR_ALERT"})}, 2500);
    }

    return (
        <AlertContext.Provider value={{alert:state,setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}



export default AlertContext;