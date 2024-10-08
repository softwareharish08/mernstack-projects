import React, { useState } from 'react'

const Signup = () => {
    const [fullname, setFullName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

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
            alert(data.message)
        } catch (error) {
            console.error("error occured" + error.message)
        }
    }

    return (
        <div className="container my-5 w-50">

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
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Signup
