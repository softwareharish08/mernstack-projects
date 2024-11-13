import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AlertContext from '../context/AlertContext'

const Navbar = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {showAlert}= useContext(AlertContext)

    const logout = () => {
        localStorage.clear()
        showAlert('logout succesfuly', 'success')
        setTimeout(() => {
            navigate('/login');
        }, 3000); // Delay navigation to allow alert to display
        
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ToDo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/yourtodo">Your ToDo</Link>
                            </li>
                        </ul>
                        <div className="btns">{
                            !token ? (
                                <>
                                    <button className="btn btn-outline-success mx-2" type="button"><Link className='text-decoration-none' to='/signup'>SignUp</Link></button>
                                    <button className="btn btn-outline-success mx-2" type="button"><Link className='text-decoration-none' to='/login'>Login</Link></button>
                                </>
                            ) : (

                                <>
                                    <button className="btn btn-outline-success mx-2" type="button" onClick={logout}>LogOut</button>
                                </>
                            )
                        }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
