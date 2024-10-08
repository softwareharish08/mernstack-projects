import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
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
                        <div className="btns">
                            <button className="btn btn-outline-success mx-2" type="button"><Link className='text-decoration-none' to='/signup'>SignUp</Link></button>
                            <button className="btn btn-outline-success mx-2" type="button"><Link className='text-decoration-none' to='/login'>Login</Link></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
