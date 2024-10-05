import React, { useState } from 'react'

const Home = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const addtodo = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/api/todo/addtodo'
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "title": title,
                    "priority": priority
                })
            })
            const data = await response.json()
            console.log(data)
        } catch (err) {
            console.error("error occured: " +  err)

        }
    }

    return (
        <div className='container my-3'>
            {/* add todo */}
            <form onSubmit={addtodo}>
                <h2 className='my-3'>Add ToDo Here</h2>
                <label htmlFor="exampleInputEmail1" className="form-label">ToDo</label>
                <div className="container d-flex justify-content-between add_todo">
                    <div className="mb-3 w-100">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="mx-2">
                        <select
                            className="form-select"
                            value={priority}
                            onChange={(e)=>{setPriority(e.target.value)}}
                            id="prioritySelect">
                            <option value="" disabled>Select Priority</option>
                            <option name='priority' value="high">High</option>
                            <option name='priority' value="medium">Medium</option>
                            <option name='priority' value="low">Low</option>
                        </select>
                    </div>
                </div>
                <div className="btn">
                    <button type="submit" className="btn btn-primary">Add ToDo</button>
                </div>
            </form>

            <hr />

            {/* display todo */}
            <div className='container'>
                <h3 className='my-3'>Here Your Today's ToDo</h3>
                <div className=" container todo-list">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                            <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                            <label className="form-check-label" htmlFor="secondCheckbox">Second checkbox</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                            <label className="form-check-label" htmlFor="thirdCheckbox">Third checkbox</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Home
