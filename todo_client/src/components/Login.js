import React from 'react'

const Login = () => {

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const url= 'http://localhost:5000/api/todo/auth/login'
        try{
            const response= await fetch(url, )
        }catch(error){

        }
    }

    return (
        <div className='container my-5 w-50'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
