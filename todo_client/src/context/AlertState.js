import {useState} from  'react';
import AlertContext from "./AlertContext"
const AlertState = (props) => {
    const [alert, setAlert] = useState({ msg: '', type: '' })
    const showAlert = (msg, type) => {
        setAlert({ msg, type })
        setTimeout(() => setAlert({ msg: '', type: '' }), 3000);
    }
    return (
        <AlertContext.Provider value={{alert,  showAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;