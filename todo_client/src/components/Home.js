import React, { useEffect, useState } from 'react'

const Home = () => {

    // adding todo function
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
            alert(data)
            setTitle('')
            setPriority('')
        } catch (err) {
            console.error("error occured: " + err)

        }

    }


    // function to get all todos 
    const [allTodo, setAllTodo] = useState([])
    const getTodo = async () => {
        const url = 'http://localhost:5000/api/todo/gettodo'
        try {
            const response = await fetch(url)
            const data = await response.json()
            setAllTodo(data)
        } catch (err) {
            console.error('error occured: ' + err)
        }
    }

    //calling the getTodo function allTodo state changes inside the useEffect hook
    useEffect(() => {
        getTodo()
    }, [allTodo])

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
                            onChange={(e) => { setPriority(e.target.value) }}
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
                        {
                            allTodo.length > 0 ?
                                allTodo.map((todo) => (
                                    <li className="list-group-item" key={todo._id}>
                                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                                        <label className="form-check-label" htmlFor="firstCheckbox">{todo.title}</label>
                                    </li>
                                )) : (
                                    <li className="list-group-item">
                                        Todo not found
                                    </li>
                                )
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Home
