import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from "../context/AlertContext"
import Alert from './Alert'

const Signup = () => {
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {showAlert}= useContext(AlertContext)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:5000/api/todo/auth/signup'
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "fullname": fullname,
                    "email": email,
                    "password": password
                })
            })
            const data = await response.json()
            localStorage.setItem('token', data.token);
            if(response.ok){
                showAlert(data.message, 'success')
                setTimeout(() => navigate('/login'), 2000);
            }else{
                showAlert(data.message, 'danger')
            }
            console.log("Token stored successfully");
        } catch (error) {
            console.error("error occured" + error.message)
        }
    }

    return (

            <div className="container my-5 w-50">
                <Alert/>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            onChange={(e) => setFullName(e.target.value)}
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            id="exampleInputPassword1" />
                    </div>
                    <div className='text-center d-flex flex-column align-items-center'>
                        <button type="submit" className="btn btn-primary my-3">SignUp</button>
                        <label htmlFor="">Login if your are already a member</label>
                        <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
                    </div>
                </form>

            </div>
    )
}

export default Signup
