import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from "../context/AlertContext"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const {showAlert}= useContext(AlertContext)
    // const alert = useContext(AlertContext)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:5000/api/todo/auth/login'
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })

            })
            const data = await response.json()
            const token = data.token
            const login = data.login
            localStorage.setItem('token', token)
            localStorage.setItem('login', login)
            if(response.ok){
                showAlert('You Logged in Succesfully', 'success')
            }
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
            <div className='container my-5 w-50'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='text-center d-flex flex-column align-items-center'>
                        <button type="submit" className="btn btn-primary my-3">Login</button>
                        <label htmlFor="">SignUp if your are a new user</label>
                        <button type="button" className="btn btn-primary" onClick={() => navigate('/signup')}>SigUp</button>
                    </div>
                </form>
            </div>
    )
}

export default Login
