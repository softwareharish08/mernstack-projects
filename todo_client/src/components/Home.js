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

    //function to delete todo
    const deleteTodo = async (id) => {

        const isConfirmed = window.confirm("Do you really want to delete the todo?");
        if (!isConfirmed) return; // If the user does not confirm, exit the function

        const url = `http://localhost:5000/api/todo/deletetodo/${id}`
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to delete todo');
            }

        } catch (error) {
            console.error('Error deleting todo:', error.message);
        }
    }

    //function to update the status to true (done)
    const statusDone = async (id) => {
        try {
            const url = `http://localhost:5000/api/todo/done/${id}`
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }catch(error){
            console.error('Error updating todo status:', error.message);
        }
        
    }

    //function to update the status to false (pending)
    const statusPending = async (id) => {
        try {
            const url = `http://localhost:5000/api/todo/pending/${id}`
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }catch(error){
            console.error('Error updating todo status:', error.message);
        }
        
    }

    //checking checkbox is checked or not
    const handleCheckbox = (e, id) => {
        if(e.target.checked){
            statusDone(id)
        }else{
            statusPending(id)
        }
    }

    return (
        <div className='container my-3 hide-scrollbar' style={{ 'minHeight': '66vh' }}>

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
                                    <li className="list-group-item my-2 d-flex justify-content-between" key={todo._id}>
                                        <div>
                                            <input className="form-check-input me-1" 
                                            onChange={(e)=>handleCheckbox(e, todo._id)} 
                                            checked={todo.status===true}
                                            type="checkbox" value="" id="firstCheckbox" />
                                            <label className="form-check-label mx-3" htmlFor="firstCheckbox">{todo.title}</label>
                                        </div>

                                        <div className=''>
                                            <span className={`badge mx-3 `}
                                            style={todo.status===true? {backgroundColor:'green'}:{backgroundColor:'red'}}
                                            >{todo.status===true? "done": "pending"}</span>
                                            <i
                                                className="fa-solid fa-xmark fa-xl pt-2 mr-2"
                                                onClick={() => deleteTodo(todo._id)}
                                            />
                                        </div>

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
