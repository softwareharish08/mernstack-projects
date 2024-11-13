import React, {useContext} from 'react'
import AlertContext from '../context/AlertContext';

const Alert = () => {
    const {alert} = useContext(AlertContext);
    return (
        alert && alert.msg && (<div>
            <div className={`alert alert-${alert.type}`} role="alert">
                {alert.msg}
            </div>

        </div>)
    )
}

export default Alert
