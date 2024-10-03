import React from 'react'

const Home = () => {
    return (
        <div className='container my-3'>
            <form>
                <h2 className='my3'>Add ToDo Here</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">ToDo</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="button" className="btn btn-primary">Add ToDo</button>
            </form>
            <div className='container'>
                <h3 className='my-3'>Here Your Today's ToDo</h3>
            </div>
        </div>
    )
}

export default Home
